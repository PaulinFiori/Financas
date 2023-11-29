import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { LoginService } from "../services/login.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> | boolean {
    sessionStorage.setItem("currentRoute", state.url);

    return true;
    
    if (this.loginService.isAccessTokenInvalid()) {
      if (!localStorage.getItem("token")) {
        this.router.navigate(["/login"]);
        return false;
      }

      return this.loginService
        .refreshAccessToken()
        .toPromise()
        .then(() => {
          if (this.loginService.isAccessTokenInvalid()) {
            this.router.navigate(["/login"]);
            return false;
          }
          return true;
        })
        .catch(() => {
          this.router.navigate(["/login"]);
          return false;
        });
    } else {
      return true;
    }
  }
}
