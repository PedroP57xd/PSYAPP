import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validator,
  FormBuilder,
  Validators
} from '@angular/forms'



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder) {

    this.formularioLogin=this.fb.group({
      'correo' : new FormControl("",Validators.required),
      'contraseña' : new FormControl("",Validators.required)
    })
  }

  ngOnInit() {
  }

}
