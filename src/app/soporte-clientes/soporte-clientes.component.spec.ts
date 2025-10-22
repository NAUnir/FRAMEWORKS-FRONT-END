import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoporteClientesComponent } from './soporte-clientes.component';

describe('SoporteClientesComponent', () => {
  let component: SoporteClientesComponent;
  let fixture: ComponentFixture<SoporteClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoporteClientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoporteClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
