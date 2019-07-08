import { Component } from '@angular/core';

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
  onSubmit(): void { }
  constructor() { }
}
