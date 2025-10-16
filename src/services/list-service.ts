import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  itemsList = ['An item', 'A second item', 'A third item', 'A fourth item'];

  getItems() {
    return this.itemsList;
  }
}
