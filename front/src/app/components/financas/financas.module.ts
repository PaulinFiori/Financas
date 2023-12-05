import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FinancasComponent } from "./financas.component";
import { CommonModulesModule } from "../common/common-modules/common-modules.module";

@NgModule({
  imports: [CommonModule, CommonModulesModule],
  declarations: [FinancasComponent]
})
export class FinancasModule {}
