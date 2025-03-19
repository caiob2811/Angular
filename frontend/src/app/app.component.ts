import { Component } from "@angular/core";
import { HeaderComponent } from "./components/template/header/header.component";
import { FooterComponent } from "./components/template/footer/footer.component";
import { NavComponent } from "./components/template/nav/nav.component";
import { RouterOutlet } from "@angular/router";


@Component({
  selector: "app-root",
  standalone: true,
  imports: [HeaderComponent, NavComponent, FooterComponent],
  templateUrl: "app.component.html",
})
export class AppComponent {}
