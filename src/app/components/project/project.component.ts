import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Project } from '../../models/project';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  // Project will be passed in from the parent component, optional
  @Input() project?: Project;
}
