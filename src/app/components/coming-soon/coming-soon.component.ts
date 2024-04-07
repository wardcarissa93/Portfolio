import { Component } from '@angular/core';

import { HomeFish3Component } from '../home-fish-3/home-fish-3.component';
import { Fish2Component } from '../fish-2/fish-2.component';

@Component({
  selector: 'app-coming-soon',
  standalone: true,
  imports: [
    HomeFish3Component,
    Fish2Component,
  ],
  templateUrl: './coming-soon.component.html',
  styleUrl: './coming-soon.component.scss'
})
export class ComingSoonComponent {

}
