import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router } from "@angular/router";
import { UserService } from "../services/user.service";

@Injectable({
  providedIn: "root"
})
export class PerfilGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}
  canActivate(next: ActivatedRouteSnapshot): boolean {
    const roles = next.data['roles'];

    this.router.navigate(["/index"]);
    return false;
  }
}
