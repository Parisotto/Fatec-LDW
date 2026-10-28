import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { CursosGrid } from './cursos/cursos-grid/cursos-grid';

@Component({
  imports: [RouterOutlet, Header, CursosGrid],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Fatec-LDW');
}
