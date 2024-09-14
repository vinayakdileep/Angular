import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-project';
  persons = ['Mital', 'Ruksha','Slishna'];

  AddPerson(name: string){
    this.persons.push(name);
  }
}
