import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent {
 userId: string = '';


constructor(private router: Router) {

  }

  onSubmit()
    {
      console.log('Username:', this.userId);
      this.router.navigate(['/home',this.userId]);
    }

}
