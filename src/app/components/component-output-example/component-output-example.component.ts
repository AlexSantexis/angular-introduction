import { Component } from '@angular/core';
import { EPerson, ManyPerson } from 'src/app/shared/interfaces/person';
import { SimpleDatabaseComponent } from '../simple-database/simple-database.component';

@Component({
  selector: 'app-component-output-example',
  standalone: true,
  imports: [SimpleDatabaseComponent],
  templateUrl: './component-output-example.component.html',
  styleUrl: './component-output-example.component.css',
})
export class ComponentOutputExampleComponent {
  manyPerson = ManyPerson;
  onPersonClicked(person: EPerson) {
    alert(this.personTemplate(person));
  }

  personTemplate(person: EPerson) {
    return `
      Person Details:
      First name : ${person.givenName}
      Last name : ${person.surName}
      Age : ${person.age}
      Email : ${person.email}
      Education : ${person.education}
    `;
  }
}
