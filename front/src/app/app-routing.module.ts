import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { BlankLayoutComponent } from './components/common/layouts/blankLayout.component';
import { BasicLayoutComponent } from './components/common/layouts/basicLayout.component';
import { RecuperarSenhaComponent } from './components/recuperar-senha/recuperar-senha.component';
import { AuthGuard } from 'src/guards/auth.guard';

const ROUTES: Routes = [
  {
    path: "",
    redirectTo: "index",
    pathMatch: "full"
  },
  {
    path: "",
    component: BlankLayoutComponent,
    children: [
      {
        path: "login",
        component: LoginComponent
      },
      {
        path: "cadastre",
        component: CadastroComponent
      },
      {
        path: "recuperar-senha/:chave",
        component: RecuperarSenhaComponent
      }
    ]
  },
  {
    path: "",
    component: BasicLayoutComponent,
    canActivate: [AuthGuard],
    children: [
    { path: 'index', component: HomeComponent },
    { path: 'perfil', component: PerfilComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
