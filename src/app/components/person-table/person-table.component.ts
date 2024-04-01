import { Component, Input } from '@angular/core';
import { Person } from 'src/app/shared/interfaces/person';

@Component({
  selector: 'app-person-table',
  standalone: true,
  imports: [],
  templateUrl: './person-table.component.html',
  styleUrl: './person-table.component.css',
})
export class PersonTableComponent {
  @Input() person: Person | undefined;
  // {
  //   givenName: 'Alexandros',
  //   surName: 'Santexis',
  //   age: 30,
  //   email: 'alex@aueb.gr',
  //   address: 'Athens, Greece',
  // };
}
