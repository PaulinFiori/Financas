import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './components/home/home.module';
import { LoginModule } from './components/login/login.module';
import { CadastroModule } from './components/cadastro/cadastro.module';
import { PerfilModule } from './components/perfil/perfil.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecuperarSenhaModule } from './components/recuperar-senha/recuperar-senha.module';
import { LayoutsModule } from "./components/common/layouts/layouts.module";
import { ToastrModule } from "ngx-toastr";
import { environment } from "../environments/environment";
import { JwtInterceptor, JwtModule } from "@auth0/angular-jwt";
import { AngularFireModule } from "@angular/fire/compat";
import { ErrorHandlerService } from "../services/error-handler.service";
import { JwtHttpInterceptor } from "../services/jwt-http-interceptor.service";
import { RefreshTokenInterceptor } from "../services/refresh-token-interceptor";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AngularFireDatabase, AngularFireDatabaseModule } from "@angular/fire/compat/database";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { GuardsModule } from "./components/common/guards/guards.module";
import * as firebase from "firebase/app";
import { FinancasModule } from './components/financas/financas.module';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { FinancasEspecificaModule } from './components/financa-especifica/financas-especifica.module'

export function tokenGetter() {
  return localStorage.getItem("token");
}

firebase.initializeApp(environment.firebase);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    GuardsModule,
    HomeModule,
    LoginModule,
    CadastroModule,
    PerfilModule,
    RecuperarSenhaModule,
    LayoutsModule,
    FinancasModule,
    FinancasEspecificaModule,
    ToastrModule.forRoot({
      preventDuplicates: true
    }),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: environment.whitelistedDomains,
        disallowedRoutes: environment.blacklistedRoutes
      }
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [
    JwtInterceptor,
    ErrorHandlerService,
    JwtHttpInterceptor,
    {
      provide: HTTP_INTERCEPTORS,
      useExisting: JwtHttpInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RefreshTokenInterceptor,
      multi: true
    },
    AngularFireDatabase
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
