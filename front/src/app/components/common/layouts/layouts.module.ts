import { NgModule } from "@angular/core";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { OverlayPanelModule } from "primeng/overlaypanel";
import { LogoutService } from "../../../../services/logout.service";
import { CommonModulesModule } from "../common-modules/common-modules.module";
import { FooterComponent } from "../footer/footer.component";
import { NavigationComponent } from "../navigation/navigation.component";
import { TopNavbarComponent } from "../topnavbar/topnavbar.component";
import { TopNavigationNavbarComponent } from "../topnavbar/topnavigationnavbar.component";
import { BasicLayoutComponent } from "./basicLayout.component";
import { BlankLayoutComponent } from "./blankLayout.component";
import { TopNavigationLayoutComponent } from "./top-navigation-layout.component";

@NgModule({
  imports: [
    CommonModulesModule,
    BsDropdownModule.forRoot(),
    OverlayPanelModule,
  ],
  declarations: [
    FooterComponent,
    BasicLayoutComponent,
    BlankLayoutComponent,
    NavigationComponent,
    TopNavbarComponent,
    TopNavigationNavbarComponent,
    TopNavigationLayoutComponent
  ],
  exports: [
    FooterComponent,
    BasicLayoutComponent,
    BlankLayoutComponent,
    NavigationComponent,
    TopNavbarComponent,
    TopNavigationNavbarComponent,
    TopNavigationLayoutComponent
  ],
  providers: [LogoutService]
})
export class LayoutsModule {}
