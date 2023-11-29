import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AuthGuard } from "../../../../guards/auth.guard";

@NgModule({
  imports: [CommonModule],
  providers: [AuthGuard]
})
export class GuardsModule {}
