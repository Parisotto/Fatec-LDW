import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  imports: [MatCardModule, MatButtonModule, MatButtonModule],
  selector: 'app-cursos-card',
  styleUrl: './cursos-card.css',
  templateUrl: './cursos-card.html',
})
export class CursosCard {}
