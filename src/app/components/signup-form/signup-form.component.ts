import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { CONFIG } from 'src/app.config';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  email: string;
  pass: string;
  fName: string;
  lName: string;
  onSubmit(): void {
    let sub = this.usersService.signUp(this.fName, this.lName, this.email, this.pass).subscribe(
      r => {
        if (r.status !== 200) {
          alert('Signup Failed !');
        } else {
          sub.unsubscribe();
          sub = this.usersService.login(this.email, this.pass).subscribe(
            r2 => {
              if (r2.status !== 200 || r2.body !== 'signed in') {
                alert('SignIn Failed !');
              } else {
                sub.unsubscribe();
                window.location.reload();
              }
            }
          );
        }
      }
    );
  }
  constructor(private usersService: UsersService) { }
}
