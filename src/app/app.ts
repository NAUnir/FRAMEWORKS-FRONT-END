import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Lista } from './lista/lista';
import { Formulario } from './formulario/formulario';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Lista, Formulario],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Mi primera app de Angular');

  sendData() {
    console.log('Enviando datos...');
  }
}
