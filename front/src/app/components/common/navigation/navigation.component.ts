import { Component, OnInit, ViewChild } from "@angular/core";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { Router } from "../../../../../node_modules/@angular/router";
import "jquery-slimscroll";
import { ToastrService } from "ngx-toastr";
import { CrudService } from "../../../../services/crud.service";
import { LoginService } from "../../../../services/login.service";
import { ItemMenu } from "../../../../models/menu/item-menu.model";
import { UserService } from "../../../../services/user.service";
import { AppMessages } from "../../../../config/app-messages";
import { MENU_USUARIO } from "../../../../config/menu";

declare var jQuery: any;

@Component({
  selector: "navigation",
  templateUrl: "navigation.template.html",
  styleUrls: ["./navigation.component.scss"]
})
export class NavigationComponent implements OnInit {
  @ViewChild("termosCondicoesModal", { static: true })
  termosCondicoesModal: any;
  @ViewChild("selecaoRegional", { static: true })
  selecaoRegional: any;

  public MENU: ItemMenu[];
  public username: string;
  public userPhoto: any;
  public location = window.location;
  public innerHtml: SafeHtml;
  public isLoading: boolean;
  constructor(
    private router: Router,
    private userService: UserService,
    private crudService: CrudService,
    private domSanitizer: DomSanitizer,
    private toastr: ToastrService,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    const token = this.userService.getUserInfo();

    this.username = "Paulo";
    if (token) {
      this.username = token.nome;
      this.userPhoto = token.foto;
    }
    this.getMenu();
  }

  public mostraTermos() {
    this.crudService.get("termos-condicoes/atual").subscribe((res: any) => {
      this.innerHtml = this.domSanitizer.bypassSecurityTrustHtml(
        "<object style='width:100%;height:500px' data='" +
        this.location.protocol +
        res.termos.url +
        "' type='application/pdf' class='embed-responsive-item'>" +
        "Object " +
        this.location.protocol +
        res.termos.url +
        " failed" +
        "</object>"
      );
      this.termosCondicoesModal.show();
    });
  }

  ngAfterViewInit() {
    jQuery("#side-menu").metisMenu();

    if (jQuery("body").hasClass("fixed-sidebar")) {
      jQuery(".sidebar-collapse").slimscroll({
        size: '10px',
        color: '#ffcc00',
        height: "100%"
      });
    }

    let token = this.userService.getUserInfo();
  }

  activeRoute(routename: string): boolean {
    return this.router.url.indexOf(routename) > -1;
  }

  getMenu() {
    this.MENU = MENU_USUARIO;
  }
}
