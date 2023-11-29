import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-erroricon",
  templateUrl: "./erroricon.component.html",
  styleUrls: ["./erroricon.component.scss"]
})
export class ErrorIconComponent implements OnInit {
  @Input() noOverlay: boolean;
  @Output() reload = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  sendReload() {
    this.reload.emit(true);
  }
}
