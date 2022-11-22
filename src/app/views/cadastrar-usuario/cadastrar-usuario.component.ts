import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})
export class CadastrarUsuarioComponent implements OnInit {

  public formCadastro: FormGroup;
  notificationService: any;
 

  constructor(fb: FormBuilder, 
    private authService: AuthService, 
    private router:Router,
    private notification: NotificationService
    ) {
    this.formCadastro = fb.group({
      email: ['', [Validators.required]],
      senha: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  public signInGoogle(): void {
    this.authService.authenticateByGoogle().subscribe(credencials => {
     this.notificationService.showMessage("Bem-vindo(a)!");
     this.router.navigate(["/home"])
    })
  }
  
  public createUserEmailAndPassword():void{
    const user: User = this.formCadastro.value;
    this.authService.createUserEmailAndPassword(user).subscribe(response=>{
     this.notification.showMessage("Usuário cadastrado");
      this.router.navigate(["/login"]);
    });
  }
}
