import { Component, OnInit } from '@angular/core';
import { Router } from "../../../../node_modules/@angular/router";
import { LoginService } from "../../../services/login.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public email: string;
  public senha: string;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit() {
    if (localStorage.getItem("token")) localStorage.removeItem("token");
  }
}
