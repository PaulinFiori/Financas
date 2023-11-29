import { LOCALE_ID, NgModule } from "@angular/core";
import { CommonModulesModule } from "./../common/common-modules/common-modules.module";
import { PerfilComponent } from "./perfil.component";

@NgModule({
  imports: [
    CommonModulesModule
  ],
  declarations: [
    PerfilComponent
  ],
  exports: [],
  providers: [{ provide: LOCALE_ID, useValue: "pt-BR" }]
})
export class PerfilModule { }
