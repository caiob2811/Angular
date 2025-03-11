import { Component, ViewEncapsulation } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [MatToolbarModule],
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {}
