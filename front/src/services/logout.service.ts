import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { environment } from '../environments//environment';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class LogoutService {
  private apiUrl = environment.server + "api/login/token/revoke";

  constructor(private http: HttpClient, private afAuth: AngularFireAuth) {}

  logout() {
    return this.http
      .delete(this.apiUrl, { withCredentials: true })
      .toPromise()
      .then(() => {
        this.afAuth.signOut().then(() => {
          localStorage.removeItem("token");
        })
      });
  }
}
