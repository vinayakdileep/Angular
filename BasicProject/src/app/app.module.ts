import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonsComponent } from './persons/persons/persons.component';
import { PersonInputComponent } from './persons/person-input/person-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: PersonInputComponent },   // Default route (home page)
  { path: 'persons', component: PersonsComponent },  // About route
  { path: '**', redirectTo: '' }  // Wildcard route for unknown paths
];

@NgModule({
  declarations: [
    AppComponent,
    PersonsComponent,
    PersonInputComponent
  ],
  imports: [
    HttpClientModule, BrowserModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
