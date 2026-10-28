import { Component } from '@angular/core';
import { CursosCard } from '../cursos-card/cursos-card';

@Component({
  imports: [ CursosCard ],
  selector: 'app-cursos-grid',
  styleUrl: './cursos-grid.css',
  templateUrl: './cursos-grid.html',
})
export class CursosGrid {}
