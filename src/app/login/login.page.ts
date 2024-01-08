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
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController
    ) {

    this.formularioLogin=this.fb.group({
      'correo' : new FormControl("",Validators.required),
      'contraseña' : new FormControl("",Validators.required)
    })
  }

  ngOnInit() {
  }

  async ingresar(){
    var f = this.formularioLogin.value;
    var usuario: string | null = localStorage.getItem('usuario');
    if(usuario!==null){
      var usuarioString: { correo: string; password: string } = JSON.parse(usuario);

      if(usuarioString.correo == f.correo && usuarioString.password == f.password){
        console.log('Ingresado');
      }else{
        const alert = await this.alertController.create({
          header: 'Datos incorrectos',
          message: 'Los datos que ingresaste son incorrectos.',
          buttons: ['Aceptar']
        });
    
        await alert.present();
      }
    }
  }


}
