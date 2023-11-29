import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Observable, ReplaySubject } from "rxjs";
import { environment } from "../environments//environment";
import { LoginErrors } from "../models/errors/login-errors.model";
import { ErrorHandlerService } from "./error-handler.service";

@Injectable()
export class LoginService {
  private apiUrl = environment.server + "oauth/token";
  private headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: "Basic bWV0cm9wb2xpdGFubzpzb25vcmFtYXJrZXRpbmc="
  });

  constructor(
    private router: Router,
    private http: HttpClient,
    private jwtHelper: JwtHelperService,
    private errorHandlerService: ErrorHandlerService,
  ) {}

  login(email: any, senha: any): Observable<any> {
    const body = new HttpParams()
      .set("client", "metropolitano")
      .set("grant_type", "password")
      .set("username", email)
      .set("password", senha);

    const postObservable = this.http.post(this.apiUrl, body, {
      headers: this.headers,
      withCredentials: true
    });

    const subject = new ReplaySubject<any>(1);
    subject.subscribe(
      res => {
        let token = res.access_token;
        if (!token) throw new Error("Token inválido");
        return this.armazenarToken(token);
      },
      erro => {
        if (erro.status === 400) {
          if (erro.error_description === "User is disabled")
            return this.errorHandlerService.handle(
              new LoginErrors(400, "Usuário inativo!")
            );
          else
            return this.errorHandlerService.handle(
              new LoginErrors(400, "Usuário ou senha inválidos!")
            );
        } else if (erro.status === 401) return false;
        else return this.errorHandlerService.handle(erro);
      }
    );

    postObservable.subscribe(subject);
    return subject;
  }

  isAccessTokenInvalid() {
    const token = localStorage.getItem("token");
    if (!token) return true;
    return this.jwtHelper.isTokenExpired(token);
  }

  refreshAccessToken(): Observable<any> {
    const body = "client=metropolitano&grant_type=refresh_token";

    const refreshObservable = this.http.post(this.apiUrl, body, {
      headers: this.headers,
      withCredentials: true
    });

    const refreshSubject = new ReplaySubject<any>(1);
    refreshSubject.subscribe(
      res => {
        this.armazenarToken(res.access_token);
      },
      erro => {
        if (erro.status === 400) {
          if (erro.error_description === "User is disabled")
            return this.errorHandlerService.handle(
              new LoginErrors(400, "Usuário inativo!")
            );
          else
            return this.errorHandlerService.handle(
              new LoginErrors(400, "Usuário ou senha inválidos!")
            );
        } else if (erro.status === 401) return false;
        else return this.errorHandlerService.handle(erro);
      }
    );

    refreshObservable.subscribe(refreshSubject);
    return refreshSubject;
  }

  decodeToken() {
    return this.jwtHelper.decodeToken(localStorage.getItem("token"));
  }

  private armazenarToken(token: string) {
    localStorage.setItem("token", token);
    const decodedToken = this.jwtHelper.decodeToken(token);

    if (decodedToken.parceiro)
      localStorage.setItem("parceiro", decodedToken.parceiro);

    if (decodedToken.contato)
      localStorage.setItem("contato", decodedToken.contato);

    return decodedToken;
  }

}
