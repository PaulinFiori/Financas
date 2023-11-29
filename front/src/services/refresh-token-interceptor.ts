import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { JwtInterceptor } from "@auth0/angular-jwt";
import { Observable, throwError } from "rxjs";
import { catchError, mergeMap } from "rxjs/operators";
import { LoginService } from "./login.service";

@Injectable()
export class RefreshTokenInterceptor implements HttpInterceptor {
  constructor(
    private authorizationService: LoginService,
    private jwtInterceptor: JwtInterceptor,
    private router: Router
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (
      this.jwtInterceptor.isAllowedDomain(req) &&
      !this.jwtInterceptor.isDisallowedRoute(req)
    ) {
      return next.handle(req).pipe(
        catchError(err => {
          const errorResponse = err as HttpErrorResponse;
          if (errorResponse.status === 401) {
            if (req.url === "/oauth/token") {
              let link = window.location.href.split("/");
              let pathResetSenha = link[link.length - 2];
              let path = link[link.length - 1];
              if((pathResetSenha  === 'recuperar-senha')  || (path === 'cadastre')){
                return throwError(err);
              }
              else{
                this.router.navigate(["/login"]);
              }
              return throwError(err);
            }
            return this.authorizationService.refreshAccessToken().pipe(
              mergeMap(() => {
                return this.jwtInterceptor.intercept(req, next);
              })
            );
          }
          return throwError(err);
        })
      );
    } else {
      return next.handle(req);
    }
  }
}
