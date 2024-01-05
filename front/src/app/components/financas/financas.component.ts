import { Component } from '@angular/core';

@Component({
  selector: 'app-financas',
  templateUrl: './financas.component.html',
  styleUrls: ['./financas.component.scss']
})
export class FinancasComponent {
  public saveFile(fileName: any): void {
    // ... save file
  }

  public handleDismiss(dismissMethod: any): void {
    // dismissMethod can be 'cancel', 'overlay', 'close', and 'timer'
    // ... do something
  }
}
