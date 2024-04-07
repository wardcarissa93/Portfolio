import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectComponent } from './components/project/project.component';
import { HomeComponent } from './components/home/home.component'
import { AboutComponent } from './components/about/about.component';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'projects/:id', component: ProjectComponent },
    { path: 'resume', component: ComingSoonComponent },
    { path: '**', component: NotFoundComponent }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
