import { Component } from '@angular/core';
import { SimpleDatabaseComponent } from '../simple-database/simple-database.component';
import { ManyPerson } from 'src/app/shared/interfaces/person';

@Component({
  selector: 'app-simple-database-example',
  standalone: true,
  imports: [SimpleDatabaseComponent],
  templateUrl: './simple-database-example.component.html',
  styleUrl: './simple-database-example.component.css',
})
export class SimpleDatabaseExampleComponent {
  manyperson = ManyPerson;
}
