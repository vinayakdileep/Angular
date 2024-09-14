import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private httpClient: HttpClient) { }

  //persons = ['Mital', 'Ruksha','Slishna'];
  persons = [];

  personSub = new Subject<string[]>();

  fetchPersons(){
    
  }

  getPersons(): string[] {
    this.httpClient.get<any>('https://swapi.dev/api/people').pipe(map(data => {return data.results.map(character => character.name)})).subscribe(data => {
      console.log(data);
      this.persons = data;
      this.personSub.next(this.persons);
    });
    return this.persons;
  }

  addPerson(name: string){
    if(name && name.trim() !== ''){
      this.persons.push(name);
      this.personSub.next(this.persons);
    }
  }

  removePerson(name: string){
    this.persons = this.persons.filter(p => p !== name);
    this.personSub.next(this.persons);
  }
}
