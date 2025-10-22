import { Component, OnInit, signal } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-precios',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './precios.component.html',
  styleUrls: ['./precios.component.css'],
})
export class PreciosComponent implements OnInit {
  backgroundImage = 'assets/images/image.png';

  preciosSignal = signal(100);

  constructor() {}

  ngOnInit() {
    console.log('precio inicial del signal:', this.preciosSignal());
    this.preciosSignal.set(150);
    console.log('Valor actualizado con set(): ', this.preciosSignal());

    this.preciosSignal.update((currentValue) => currentValue + 25);
    console.log('Valor actualizado con update(): ', this.preciosSignal());
  }
}
