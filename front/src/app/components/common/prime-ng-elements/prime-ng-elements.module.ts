import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CalendarModule } from "primeng/calendar";
import { CheckboxModule } from "primeng/checkbox";
import { DropdownModule } from "primeng/dropdown";
import { EditorModule } from "primeng/editor";
import { InputMaskModule } from "primeng/inputmask";
import { InputTextModule } from "primeng/inputtext";
import { ListboxModule } from "primeng/listbox";
import { MultiSelectModule } from "primeng/multiselect";
import { OverlayPanelModule } from "primeng/overlaypanel";
import { RadioButtonModule } from "primeng/radiobutton";
import { SelectButtonModule } from "primeng/selectbutton";
import { TableModule } from "primeng/table";
import { TooltipModule } from "primeng/tooltip";
import { TreeModule } from "primeng/tree";
import {FileUploadModule} from 'primeng/fileupload';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    TableModule,
    InputMaskModule,
    CalendarModule,
    TooltipModule,
    EditorModule,
    DropdownModule,
    ListboxModule,
    RadioButtonModule,
    OverlayPanelModule,
    CheckboxModule,
    MultiSelectModule,
    SelectButtonModule,
    TreeModule,
    InputTextModule,
    FileUploadModule
  ],
  declarations: [],
  exports: [
    BrowserAnimationsModule,
    TableModule,
    InputMaskModule,
    CalendarModule,
    TooltipModule,
    EditorModule,
    DropdownModule,
    ListboxModule,
    RadioButtonModule,
    OverlayPanelModule,
    CheckboxModule,
    MultiSelectModule,
    SelectButtonModule,
    TreeModule,
    InputTextModule,
    FileUploadModule
  ]
})
export class PrimeNgElementsModule {}
