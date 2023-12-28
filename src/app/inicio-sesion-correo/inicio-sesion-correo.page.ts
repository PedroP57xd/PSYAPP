import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';


@Component({
  selector: 'app-inicio-sesion-correo',
  templateUrl: './inicio-sesion-correo.page.html',
  styleUrls: ['./inicio-sesion-correo.page.scss'],
})
export class InicioSesionCorreoPage implements OnInit {

  formularioInicioSesionCorreo: FormGroup | undefined;

  constructor(public fb: FormBuilder) {

    this.formularioInicioSesionCorreo = this.fb.group({
      'correo': new FormControl("",Validators.required),
      'contraseña': new FormControl("",Validators.required)
      
    })

  }

  ngOnInit() {
  }

}
