import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { CanActivate, Router } from "@angular/router";
import { Observable } from "rxjs";
import { map, take, tap } from "rxjs/operators";

@Injectable()
export class AuthFireGuard implements CanActivate {
  constructor(private auth: AngularFireAuth, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.auth.authState.pipe(
      take(1),
      map(authState => !!authState),
      tap(auth => (!auth ? this.router.navigate(["/login"]) : true))
    );
  }
}
