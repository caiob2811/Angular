import { Component, ViewEncapsulation } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BlueDirective } from '../../../directives/blue.directive';
import { ForDirective } from '../../../directives/for.directive';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatToolbarModule, BlueDirective],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent {
  title = 2025
}
