import { Component, Input } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private location: Location,
  ) {}

  project?: Project;

  // Extract the id from the route and use the ProjectService to get the project with that idf
  getProject(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.projectService.getProject(id)
      .subscribe(project => this.project = project); 
  }

  // Call getProject() in the ngOnInit lifecycle hook
  ngOnInit(): void {
    this.getProject();
  }

  // goBack() method uses the Location service to go back to the previous page
  goBack(): void {
    this.location.back();
  }
}
