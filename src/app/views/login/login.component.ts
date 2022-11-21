import { Component, OnInit } from '@angular/core';
import{FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formLogin: FormGroup

  constructor(fb: FormBuilder, private authService:AuthService) { 
    this.formLogin = fb.group({
      email:['',[Validators.required]],
      senha:['',[Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  public signInGoogle(): void{ // metodo de clicar p/ autenticar pelo google
   this.authService.autheticateByGoogle().subscribe(credencials=>{
     alert ("Autenticado!")
   })
  }
}
