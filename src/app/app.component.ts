import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonTableComponent } from './components/person-table/person-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  name = 'Alexandros';

  person0 = {
    givenName: 'Alexandros',
    surName: 'Santexis',
    age: 30,
    email: 'alex@aueb.gr',
    address: 'Athens, Greece',
  };

  person1 = {
    givenName: 'John',
    surName: 'Doe',
    age: 0x25,
    email: 'alex@aueb.gr',
    address: 'New York, USA',
  };
}
