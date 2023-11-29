import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-loading",
  templateUrl: "./loading.component.html",
  styleUrls: ["./loading.component.scss"]
})
export class LoadingComponent implements OnInit {
  @Input() noOverlay: boolean = true;
  @Input() delay: number = 500;
  public display = false;
  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.display = true;
    }, this.delay || 500);
  }
}
