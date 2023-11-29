import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CadastroComponent } from "./cadastro.component";
import { CommonModulesModule } from "../common/common-modules/common-modules.module";

@NgModule({
  imports: [CommonModule, CommonModulesModule],
  declarations: [CadastroComponent]
})
export class CadastroModule {}
