import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validator,
  FormBuilder,
  Validators
} from '@angular/forms'
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  formularioRegistro: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController) { 
    this.formularioRegistro=this.fb.group({
      'nombre' : new FormControl("",Validators.required),
      'correo' : new FormControl("",Validators.required),
      'contraseña' : new FormControl("",Validators.required)
    });

  }
  

  ngOnInit() {
  }

  async guardar(){
    var f=this.formularioRegistro.value;

    if (this.formularioRegistro.invalid) {
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Por Favor llenar todos los datos',
        buttons: ['Aceptar']
      });
      await alert.present();
      return;
    }

    var usuario = {
      correo: f.correo,
      contraseña: f.contraseña
    }

    localStorage.setItem('usuario',JSON.stringify(usuario));
  }

}