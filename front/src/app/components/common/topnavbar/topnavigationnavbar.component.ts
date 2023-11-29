import { Component, OnInit } from "@angular/core";
import { smoothlyMenu } from "../../../app.helpers";
import { LogoutService } from "../../../../services/logout.service";
declare var jQuery: any;

@Component({
  selector: "topnavigationnavbar",
  templateUrl: "topnavigationnavbar.template.html"
})
export class TopNavigationNavbarComponent implements OnInit {
  constructor(private logoutService: LogoutService) {}

  ngOnInit() {}

  toggleNavigation(): void {
    jQuery("body").toggleClass("mini-navbar");
    smoothlyMenu();
  }

  logout() {
    this.logoutService.logout().then(res => {
    });
  }
}
