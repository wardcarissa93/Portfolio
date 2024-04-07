// Importing necessary Angular modules and components for routing
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './components/projects/projects.component'; // Importing ProjectsComponent for projects route
import { ProjectComponent } from './components/project/project.component'; // Importing ProjectComponent for project detail route
import { HomeComponent } from './components/home/home.component'; // Importing HomeComponent for home route
import { AboutComponent } from './components/about/about.component'; // Importing AboutComponent for about route
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component'; // Importing ComingSoonComponent for resume route
import { NotFoundComponent } from './components/not-found/not-found.component'; // Importing NotFoundComponent for wildcard route

// Array defining the routes for the application
export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' }, // Home route with HomeComponent
  { path: 'about', component: AboutComponent }, // About route with AboutComponent
  { path: 'projects', component: ProjectsComponent }, // Projects route with ProjectsComponent
  { path: 'projects/:id', component: ProjectComponent }, // Project detail route with ProjectComponent and route parameter
  { path: 'resume', component: ComingSoonComponent }, // Resume route with ComingSoonComponent (coming soon page)
  { path: '**', component: NotFoundComponent } // Wildcard route for any other paths, using NotFoundComponent
];

// Exporting the configured routing module using RouterModule.forRoot() with defined routes
export const AppRoutingModule = RouterModule.forRoot(routes);