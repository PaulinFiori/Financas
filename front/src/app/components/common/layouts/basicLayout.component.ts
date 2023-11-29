import { Component } from "@angular/core";
import { CrudService } from "../../../../services/crud.service";
import { LoginService } from "../../../../services/login.service";
import { UserService } from "../../../../services/user.service";
import { detectBody } from "../../../app.helpers";

declare var jQuery: any;

@Component({
  selector: "basic",
  templateUrl: "basicLayout.template.html",
  host: {
    "(window:resize)": "onResize()"
  }
})
export class BasicLayoutComponent {
  constructor(
    private userService: UserService,
    private crudService: CrudService,
    private loginService: LoginService
  ) {}
  
  public ngOnInit(): any {
     detectBody();
  }

  public onResize() {
    detectBody();
  }
}
