import { Component, OnInit, signal } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { PricesService } from '../../services/prices-service';

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
  precios = [];
  showError = false;

  constructor(private pricesService: PricesService) {}

  ngOnInit() {
    this.pricesService.getPrices().subscribe(
      (data: any) => {
        this.precios = data.slice(0, 3);
        console.log('Datos recibidos:', this.precios);
      },
      (error) => {
        this.showError = true;
        console.error('Error al obtener los precios:', error);
      }
    );

    console.log('precio inicial del signal:', this.preciosSignal());
    this.preciosSignal.set(150);
    console.log('Valor actualizado con set(): ', this.preciosSignal());

    this.preciosSignal.update((currentValue) => currentValue + 25);
    console.log('Valor actualizado con update(): ', this.preciosSignal());
  }
}
