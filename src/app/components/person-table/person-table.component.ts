import { Component } from '@angular/core';

@Component({
  selector: 'app-person-table',
  standalone: true,
  imports: [],
  templateUrl: './person-table.component.html',
  styleUrl: './person-table.component.css',
})
export class PersonTableComponent {
  person = {
    givenName: 'Alexandros',
    surName: 'Santexis',
    age: '30',
    email: 'alex@aueb.gr',
  };
}
