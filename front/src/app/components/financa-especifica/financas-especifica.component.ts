import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-financas',
  templateUrl: './financas-especifica.component.html',
  styleUrls: ['./financas-especifica.component.scss']
})
export class FinancasEspeficaComponent {
  @Output()
  saveFinish = new EventEmitter();

  constructor(private router: Router) {}

  public saveFile(fileName: any): void {
    // ... save file
  }

  public handleDismiss(dismissMethod: any): void {
    // dismissMethod can be 'cancel', 'overlay', 'close', and 'timer'
    // ... do something
  }

  hideModal() {
    this.saveFinish.emit("cancel");
    this.router.navigate(["/index"]);
  }
}
