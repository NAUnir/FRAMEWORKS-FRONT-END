import { Component, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { ListService } from '../../services/list-service';

@Component({
  selector: 'app-lista',
  imports: [NgFor],
  templateUrl: './lista.html',
  styleUrl: './lista.css',
})
export class Lista {
  service = inject(ListService);
  items = this.service.getItems();
}
