import { Routes } from '@angular/router';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectComponent } from './components/project/project.component';

export const routes: Routes = [
    { path: 'projects', component: ProjectsComponent, pathMatch: 'full' },
];
