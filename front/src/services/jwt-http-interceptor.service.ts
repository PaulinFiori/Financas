import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../environments/environment";

@Injectable()
export class JwtHttpInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = localStorage.getItem("token");
    let clone: HttpRequest<any>;
    if (this.isWhitelisted(request)) {
      clone = request.clone({
        setHeaders: {
          Accept: `application/json`,
          "Content-Type": `application/json`,
          Authorization: `Bearer ${token}`
        }
      });
    } else {
      let headers;

      if (request.url.includes("/api"))
        headers = {
          Accept: `application/json`,
          "Content-Type": `application/json`,
          Authorization: "Basic bWV0cm9wb2xpdGFubzpzb25vcmFtYXJrZXRpbmc="
        };
      else
        headers = {
          Accept: `application/json`,
          "Content-Type": `application/x-www-form-urlencoded`,
          Authorization: "Basic bWV0cm9wb2xpdGFubzpzb25vcmFtYXJrZXRpbmc="
        };

      clone = request.clone({
        setHeaders: headers
      });
    }
    return next.handle(clone);
  }

  isWhitelisted(request: any) {
    for (let url of environment.blacklistedRoutes) {
      if (request.url.includes("/api/enderecos/")) return false;
      if (request.url.includes("/api/login/recuperar/senha/")) return false;
      if (request.url === "/api/profissionais") return true;
      if (request.url === "/api/termos-condicoes") return true;
      if (url.includes(request.url)) return false;
    }
    return true;
  }
}
