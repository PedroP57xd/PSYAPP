import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InicioSesionCorreoPage } from './inicio-sesion-correo.page';

describe('InicioSesionCorreoPage', () => {
  let component: InicioSesionCorreoPage;
  let fixture: ComponentFixture<InicioSesionCorreoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InicioSesionCorreoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
