import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { PersonService } from '../service/person.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit, OnDestroy {

  fetchData = false;
  personList = [];
  personSub :Subscription;
  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    this.personList = this.personService.getPersons();
    this.fetchData = true;
    this.personSub = this.personService.personSub.subscribe(person => {
      this.fetchData = false;
      this.personList = person;
      console.log('subscribed here'+ person);
    });
  }

  removePerson(name: string){
    this.personService.removePerson(name);
  }

  ngOnDestroy(){
    this.personSub.unsubscribe();
  }

}
