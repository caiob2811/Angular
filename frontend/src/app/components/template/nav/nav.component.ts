import { Component, ViewEncapsulation } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [MatToolbarModule, MatSidenavModule, MatListModule, RouterLink, RouterOutlet],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
  encapsulation: ViewEncapsulation.None
})
export class NavComponent {

}
