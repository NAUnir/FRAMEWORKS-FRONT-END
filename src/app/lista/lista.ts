import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-lista',
  imports: [NgFor],
  templateUrl: './lista.html',
  styleUrl: './lista.css',
})
export class Lista {
  items = ['An item', 'A second item', 'A third item', 'A fourth item'];
}
