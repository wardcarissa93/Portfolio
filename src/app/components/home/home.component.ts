import { Component } from '@angular/core';

import { HomeFish1Component } from '../home-fish-1/home-fish-1.component';
import { HomeFish2Component } from '../home-fish-2/home-fish-2.component';
import { HomeFish3Component } from '../home-fish-3/home-fish-3.component';
import { HomeFish4Component } from '../home-fish-4/home-fish-4.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HomeFish1Component,
    HomeFish2Component,
    HomeFish3Component,
    HomeFish4Component,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
}
