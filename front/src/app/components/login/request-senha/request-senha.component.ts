import { Component, OnInit, ViewChild } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { CrudService } from "../../../../services/crud.service";

@Component({
  selector: "app-request-senha",
  templateUrl: "./request-senha.component.html",
  styleUrls: ["./request-senha.component.scss"]
})
export class RequestSenhaComponent implements OnInit {
  @ViewChild("formModal", { static: true })
  formModal: any;

  public email: string;
  public isLoading: boolean;
  constructor(
    private crudService: CrudService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {}

  showModal() {
    this.formModal.show();
  }

  hideModal() {
    this.formModal.hide();
  }

  onHide(form: any) {
    form.reset();
  }

  enviar(form: any) {
    if (form.invalid) return;
    this.isLoading = true;
    this.crudService
      .post("login/recuperar/senha", { email: this.email })
      .subscribe(
        res => {
          this.isLoading = false;
          this.toastr.success(
            "Por favor, verifique a sua caixa de entrada",
            "Email enviado com sucesso!"
          );

          this.hideModal();
        },
        erro => {
          this.isLoading = false;
          this.toastr.error(erro.error.titulo, "Erro " + erro.error.status);
        }
      );
  }
}
