import { LOCALE_ID, NgModule } from "@angular/core";
import { CommonModulesModule } from "./../common/common-modules/common-modules.module";
import { PerfilComponent } from "./perfil.component";
import { FileUploadModule } from "ng2-file-upload";
import { CheckboxModule } from "primeng/checkbox";

@NgModule({
  imports: [
    CommonModulesModule,
    FileUploadModule,
    CheckboxModule
  ],
  declarations: [
    PerfilComponent
  ],
  exports: [],
  providers: [{ provide: LOCALE_ID, useValue: "pt-BR" }]
})
export class PerfilModule { }
