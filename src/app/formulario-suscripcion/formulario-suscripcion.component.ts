import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PricesService } from '../../services/prices-service';

@Component({
  selector: 'app-formulario-suscripcion',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-suscripcion.component.html',
  styleUrls: ['./formulario-suscripcion.component.css'],
})
export class FormularioSuscripcionComponent implements OnInit {
  pricesService = inject(PricesService);
  clientData = {
    name: '',
    surname: '',
    address: '',
    email: '',
    phone: '',
  };

  body = {
    username: 'pepe',
    email: 'pepe@outlook.com',
    password: '2222222',
  };

  constructor() {}

  ngOnInit(): void {}

  onSubmit(form: any) {
    this.clientData = form.value;
    console.log(this.clientData);
    this.pricesService.postUser(this.body).subscribe((response) => {
      console.log('Respuesta del servidor:', response);
    });
  }
}
