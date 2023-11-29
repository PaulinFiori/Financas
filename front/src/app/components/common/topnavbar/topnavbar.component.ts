import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { OverlayPanel } from "primeng/overlaypanel";
import { Observable, of, Subject, Subscription } from "rxjs";
import { debounceTime, switchMap } from "rxjs/operators";
import { CrudService } from "../../../../services/crud.service"
import { UserService } from "../../../../services/user.service";
import { Router } from "../../../../../node_modules/@angular/router";
import { smoothlyMenu } from "../../../app.helpers";
import { LogoutService } from "../../../../services/logout.service";

declare var jQuery: any;

@Component({
  selector: "topnavbar",
  templateUrl: "topnavbar.template.html",
  styleUrls: ["topnavbar.component.scss"]
})
export class TopNavbarComponent implements OnInit {
  @ViewChild("globalSearchInput", { static: true })
  globalSearchInput: ElementRef;
  @ViewChild("overlay", { static: true })
  overlay: OverlayPanel;

  public responseAutoComplete: Observable<any>;
  public filaRequisicoes: Subject<any> = new Subject<any>();
  public globalSearch: string;
  public sub: Subscription;

  public sugestoes: any[];
  public isLoading = false;
  public event: Event;
  public showSearchBar = true;
  public isOverlayShown: boolean;
  public location = window.location;
  public isProfissional: boolean;
  public isEmpresa: boolean;

  constructor(
    private userService: UserService,
    private logoutService: LogoutService,
    private router: Router,
    private crudService: CrudService
  ) {}

  ngOnInit() {
  }

  toggleNavigation(): void {
    jQuery("body").toggleClass("mini-navbar");
    smoothlyMenu();
  }

  logout() {
    this.logoutService.logout().then(res => {
      this.router.navigate(["/login"]);
    });
  }

  onAfterShow() {
    this.isOverlayShown = true;
  }

  onAfterHide() {
    this.isOverlayShown = false;
  }

}
