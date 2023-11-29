import { Component } from "@angular/core";

declare var jQuery: any;

@Component({
  selector: "blank",
  templateUrl: "blankLayout.template.html"
})
export class BlankLayoutComponent {

  ngOnInit() {}

  ngAfterViewInit() {
    jQuery("body").addClass("gray-bg");
  }

}
