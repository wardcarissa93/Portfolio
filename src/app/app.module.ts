// Importing necessary Angular modules and components
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes'; // Importing routing module
import { AppComponent } from './app.component'; // Importing root component

// NgModule decorator to define the module
@NgModule({
  declarations: [
    AppComponent // Declaring the root component
  ],
  imports: [
    BrowserModule, // Importing BrowserModule for browser-specific features
    AppRoutingModule // Importing AppRoutingModule for routing configuration
  ],
  providers: [], // Providers for services
  bootstrap: [AppComponent] // Bootstrap component for app initialization
})
export class AppModule { } // Exporting AppModule class
