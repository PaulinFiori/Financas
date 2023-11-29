import { NgModule } from "@angular/core";
import { LoginService } from "../../../services/login.service";
import { CommonModulesModule } from "../common/common-modules/common-modules.module";
import { LoginComponent } from "./login.component";
import { RequestSenhaComponent } from './request-senha/request-senha.component';

@NgModule({
  imports: [CommonModulesModule],
  declarations: [LoginComponent, RequestSenhaComponent],
  providers: [LoginService]
})
export class LoginModule {}
