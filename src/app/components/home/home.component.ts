import { Component } from '@angular/core';

import { HomeFish1Component } from '../home-fish-1/home-fish-1.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HomeFish1Component
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
}
