import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { RecuperarSenhaComponent } from "./recuperar-senha.component";

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule],
  declarations: [RecuperarSenhaComponent]
})
export class RecuperarSenhaModule {}
