import { Component } from '@angular/core';

import { HomeFish3Component } from '../home-fish-3/home-fish-3.component';
import { Fish2Component } from '../fish-2/fish-2.component';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [
    HomeFish3Component,
    Fish2Component,
  ],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {

}
