import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-suscripcion',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-suscripcion.component.html',
  styleUrls: ['./formulario-suscripcion.component.css'],
})
export class FormularioSuscripcionComponent implements OnInit {
  clientData = {
    name: '',
    surname: '',
    address: '',
    email: '',
    phone: '',
  };

  constructor() {}

  ngOnInit(): void {}

  onSubmit(form: any) {
    this.clientData = form.value;
    console.log(this.clientData);
  }
}
