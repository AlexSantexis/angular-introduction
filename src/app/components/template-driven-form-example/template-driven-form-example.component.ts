import { Component } from '@angular/core';
import { EpersonTemplateDrivenFormComponent } from '../eperson-template-driven-form/eperson-template-driven-form.component';
import { EPerson } from 'src/app/shared/interfaces/person';
import { PersonTableComponent } from '../person-table/person-table.component';
import { SimpleDatabaseComponent } from '../simple-database/simple-database.component';

@Component({
  selector: 'app-template-driven-form-example',
  standalone: true,
  imports: [
    EpersonTemplateDrivenFormComponent,
    PersonTableComponent,
    SimpleDatabaseComponent,
  ],
  templateUrl: './template-driven-form-example.component.html',
  styleUrl: './template-driven-form-example.component.css',
})
export class TemplateDrivenFormExampleComponent {
  currentPerson: EPerson;
  persons: EPerson[] = [];
  onPerson(person: EPerson) {
    this.currentPerson = person;
    this.persons.push(person);
  }
}
