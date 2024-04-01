import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectComponent } from './components/project/project.component';
import { HomeComponent } from './components/home/home.component'

export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'projects', component: ProjectsComponent },
    { path: 'projects/:id', component: ProjectComponent },
];

export const AppRoutingModule = RouterModule.forRoot(routes);
