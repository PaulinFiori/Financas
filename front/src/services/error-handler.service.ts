import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { LoginErrors } from "../models/errors/login-errors.model";

@Injectable()
export class ErrorHandlerService {
  constructor(private toastr: ToastrService) { }

  public handle(erro: any): Promise<any> | undefined {
    // Configuração para não exibir erros duplicados
    this.toastr.toastrConfig.preventDuplicates = true;

    // Setando exibição dos erros
    if (erro.status === 0 || erro.status === 500) return;
    else if (erro instanceof LoginErrors)
      this.toastr.error("Por favor, verifique se as informações fornecidas estão corretas.", erro.message);
    else if (erro.hasOwnProperty("code"))
      this.toastr.error(erro.message, "Erro " + erro.code);
    else {
      let message = erro.titulo || erro.message;
      this.toastr.error(message, "Erro: " + erro.status);
    }

    return Promise.reject(erro.message || erro);
  }
}
