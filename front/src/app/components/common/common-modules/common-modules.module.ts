import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ModalModule } from "ngx-bootstrap/modal";
import { ErrorIconModule } from "../erroricon/erroricon.module";
import { LoadingModule } from "../loading/loading.module";
import { PrimeNgElementsModule } from "../prime-ng-elements/prime-ng-elements.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    RouterModule,
    PrimeNgElementsModule,
    ModalModule,
    LoadingModule,
    ErrorIconModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    RouterModule,
    PrimeNgElementsModule,
    ModalModule,
    LoadingModule,
    ErrorIconModule
  ]
})
export class CommonModulesModule {}
