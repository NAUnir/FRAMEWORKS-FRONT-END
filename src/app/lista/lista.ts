import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  imports: [],
  templateUrl: './lista.html',
  styleUrl: './lista.css',
})
export class Lista {
  item = {
    item1: 'An item',
    item2: 'A second item',
    item3: 'A third item',
    item4: 'A fourth item',
  };
}
