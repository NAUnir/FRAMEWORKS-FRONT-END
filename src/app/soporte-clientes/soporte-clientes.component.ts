import { Component, OnInit, inject } from '@angular/core';
import { FormControl, Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-soporte-clientes',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './soporte-clientes.component.html',
  styleUrls: ['./soporte-clientes.component.css'],
})
export class SoporteClientesComponent implements OnInit {
  formBuilder = inject(FormBuilder);
  formSoporte = this.formBuilder.group({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    surname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    clientId: new FormControl(''),
    subject: new FormControl('', [Validators.required, Validators.minLength(5)]),
    message: new FormControl('', [Validators.required, Validators.minLength(10)]),
    gender: new FormControl('Señora', [Validators.required]),
    terms: new FormControl(false, [Validators.requiredTrue]),
  });

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.formSoporte.value);
  }
}
