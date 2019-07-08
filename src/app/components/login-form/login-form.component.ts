import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  email: string;
  pass: string;
  onSubmit(): void {
    let sub = this.usersService.login(this.email, this.pass).subscribe(
      r => {
        if (r.status !== 200 || r.body !== 'signed in') {
          alert('SignIn Failed !');
        } else {
          sub.unsubscribe();
          window.location.reload();
        }
      }
    );
  }
  constructor(private usersService : UsersService) { }
}
