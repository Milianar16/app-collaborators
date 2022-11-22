import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private authService:AuthService,
    private notification:NotificationService,
    private router:Router
    ) { }
  ngOnInit(): void {
  }

  public logout(): void {
   this.authService.lougout().subscribe(response=>{
     this.notification.showMessage("Até logo");
     this.router.navigate(["/login"])
   })
  }
}
