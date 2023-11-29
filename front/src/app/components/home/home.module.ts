import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { CommonModulesModule } from "../common/common-modules/common-modules.module";

@NgModule({
  imports: [CommonModule, CommonModulesModule],
  declarations: [HomeComponent]
})
export class HomeModule {}
