import { Component } from '@angular/core';
import { EpersonReactiveFormComponent } from '../eperson-reactive-form/eperson-reactive-form.component';
import { EPerson, Person } from 'src/app/shared/interfaces/person';
import { PersonTableComponent } from '../person-table/person-table.component';
import { SimpleDatabaseComponent } from '../simple-database/simple-database.component';

@Component({
  selector: 'app-reactive-form-example',
  standalone: true,
  imports: [
    EpersonReactiveFormComponent,
    PersonTableComponent,
    SimpleDatabaseComponent,
  ],
  templateUrl: './reactive-form-example.component.html',
  styleUrl: './reactive-form-example.component.css',
})
export class ReactiveFormExampleComponent {
  currentPerson: EPerson;
  persons: EPerson[] = [];

  onPerson(person: EPerson) {
    this.currentPerson = person;
    this.persons.push(person);
  }
}
