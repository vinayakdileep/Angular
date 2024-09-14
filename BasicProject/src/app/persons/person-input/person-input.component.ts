import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PersonService } from '../service/person.service';

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']
})
export class PersonInputComponent implements OnInit {

  name = '';
  @Output() addPerson = new EventEmitter<string>();
  constructor(private personService: PersonService) { }

  ngOnInit(): void {
  }
  createPerson(){
    this.personService.addPerson(this.name);
    this.name = '';
  }

}
