import { Component, OnInit } from '@angular/core';
import { Router } from "../../../../node_modules/@angular/router";
import { LoginService } from "../../../services/login.service";

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {
  constructor(
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit() {
    if (localStorage.getItem("token")) localStorage.removeItem("token");
  }
}
