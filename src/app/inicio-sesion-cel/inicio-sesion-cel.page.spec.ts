import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InicioSesionCelPage } from './inicio-sesion-cel.page';

describe('InicioSesionCelPage', () => {
  let component: InicioSesionCelPage;
  let fixture: ComponentFixture<InicioSesionCelPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InicioSesionCelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
