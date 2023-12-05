import { Component, EventEmitter, HostListener, Input, OnInit, Output, ViewChild, ElementRef } from "@angular/core";
import { FileItem, FileUploader, ParsedResponseHeaders } from "ng2-file-upload";
import { NgModel, NgForm } from "@angular/forms";

declare var $: any;

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  value: any;
  valueNome: string = "";
  valueEmail: string = "";
  valueSenha: any;
  confirmSenha: any;
  @Output()
  valueChange = new EventEmitter();
  public inputWidth: any;
  public fotoUrl: string | null;
  public fileLoading: boolean;
  public location = window.location;
  public showInput: boolean;
  senhaAlterada: boolean = false;
  @ViewChild("form", { static: true }) ngForm: NgForm;
  @ViewChild("inputNome", { static: true }) inputNome: NgModel;
  @ViewChild("inpuEmail", { static: true }) inpuEmail: NgModel;
  @ViewChild("inputSenha", { static: true }) inputSenha: NgModel;
  @ViewChild("inputConfirm", { static: true }) inputConfirm: NgModel;

  accept: string = "image/*";
  isLoading: boolean;
  inputMaxWidth: number;
  @Output()
  sendFiles = new EventEmitter();
  @Output()
  isLoadingChange = new EventEmitter();
  @Output()
  errorEmitter = new EventEmitter();
  @ViewChild("fileField", { static: true })
  fileField: ElementRef;
  public uploader: FileUploader | any;

  @HostListener("window:resize", ["$event"])
  onResize(event: any) {
  }

  constructor() {}

  ngOnInit() {
    this.setPhoto();
    this.fileUpload();
    this.ngForm.addControl(this.inputNome);
    this.ngForm.addControl(this.inpuEmail);
    this.ngForm.addControl(this.inputSenha);
    this.ngForm.addControl(this.inputConfirm);
  }

  setPhoto() {
    if (this.value) {
      if (this.value.url) {
        this.fotoUrl = location.protocol + this.value["url"];
        this.showInput = false;
        return;
      }
    }

    this.showInput = true;
  }

  getFile(event: any) {
    if (event[0]) {
      this.valueChange.emit({ nome: event[0].name });
      this.fotoUrl = location.protocol + event[0].url;
    }
  }

  fileErrorHandler(event: any) {
  }

  alterarFoto() {
    this.showInput = true;
  }

  removerFoto() {
    this.showInput = true;
    this.valueChange.emit(null);
    this.fotoUrl = null;
  }

  fileUpload() {
    this.uploader = new FileUploader({
      autoUpload: true,
      url: "/api/anexos"
    });

    this.uploader.onAfterAddingFile = (item : any) => {
      if (item.file.size > 100000000) {
        item.cancel();
        this.uploader.removeFromQueue(item);
        this.errorEmitter.emit({
          code: 413,
          message: "O tamanho do arquivo não pode ser maior que 100MB."
        });
      }
    };

    this.uploader.onBeforeUploadItem = (item : any) => {
      this.isLoadingChange.emit(true);
    };

    this.uploader.onSuccessItem = (
      item: FileItem | any,
      response: string,
      status: number,
      headers: ParsedResponseHeaders
    ) => {
      item["amazonFile"] = JSON.parse(response).nome;
      item["amazonUrl"] = JSON.parse(response).url;
      this.sendQueue();
      this.isLoadingChange.emit(false);
    };

    this.uploader.onErrorItem = (
      item: FileItem,
      response: string,
      status: number,
      headers: ParsedResponseHeaders
    ) => {
      this.isLoadingChange.emit(false);
      this.errorEmitter.emit({
        status: 500,
        message: "Ocorreu um erro no servidor"
      });
      this.uploader.removeFromQueue(item);
      let erro = JSON.parse(response);
    };
  }
  
  getFile1(file: any) {
    return this.uploader.queue.filter((i : any) => i["some"] === file)[0];
  }

  removerItem(item: any) {
    item.remove();
    this.sendQueue();
  }

  clearQueue() {
    this.uploader.clearQueue();
    this.sendQueue();
  }

  sendQueue() {
    let queue: any[] = [];

    for (let item of this.uploader.queue) {
      queue.push({ name: item["amazonFile"], url: item["amazonUrl"] });
    }

    this.sendFiles.emit(queue);
  }

  visualizar(item : any) {
    window.open(item.amazonUrl, "_blank");
  }

  clearInput() {
    $(".fileinput").fileinput("clear");
  }

  getInputErrorsNome() {
    return (
      (this.inputNome.errors && (this.inputNome.dirty || this.inputNome.touched)) || false
    );
  }

  getInputErrorsEmail() {
    return (
      (this.inpuEmail.errors && (this.inpuEmail.dirty || this.inpuEmail.touched)) || false
    );
  }

  getInputErrorsSenha() {
    return (
      (this.inputSenha.errors && (this.inputSenha.dirty || this.inputSenha.touched)) || false
    );
  }

  getInputConfirmErrors() {
    return (
      (this.inputConfirm.errors &&
        (this.inputConfirm.dirty || this.inputConfirm.touched)) ||
      false
    );
  }

  onConfirmChange(event: any) {
    if (event !== this.valueSenha)
      this.inputConfirm.control.setErrors({ MatchPassword: true });
  }

  onValueChangeSenha(event: any) {
    if (this.confirmSenha !== this.valueSenha)
      this.inputConfirm.control.setErrors({ MatchPassword: true });
  }

  onSenhaAlteradaChange(event: any) {
    this.senhaAlterada = event;
  }
}
