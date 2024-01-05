import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FinancasEspeficaComponent } from "./financas-especifica.component";
import { CommonModulesModule } from "../common/common-modules/common-modules.module";

@NgModule({
  imports: [CommonModule, CommonModulesModule],
  declarations: [FinancasEspeficaComponent]
})
export class FinancasEspecificaModule {}
