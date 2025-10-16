import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {
  userData = {
    name: 'María',
    surname: 'Ocejo',
    email: 'maria.oci@example.com',
    phone: '123-456-7890',
    message: 'Hola, este es un mensaje de prueba.',
  };

  onSubmit() {
    console.log(this.userData);
  }
}
