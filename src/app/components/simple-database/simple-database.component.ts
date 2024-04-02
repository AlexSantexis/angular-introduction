import { Component, Input } from '@angular/core';
import { EPerson } from 'src/app/shared/interfaces/person';

@Component({
  selector: 'app-simple-database',
  standalone: true,
  imports: [],
  templateUrl: './simple-database.component.html',
  styleUrl: './simple-database.component.css',
})
export class SimpleDatabaseComponent {
  @Input() data: EPerson[];
}
