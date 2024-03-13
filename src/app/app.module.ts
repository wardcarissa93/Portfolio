import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { CategoriesComponent } from './components/categories/categories.component';
import { TagsComponent } from './components/tags/tags.component';

@NgModule({
    declarations: [
        AppComponent,
        CategoriesComponent,
        TagsComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }