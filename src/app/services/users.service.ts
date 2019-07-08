import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CONFIG } from 'src/app.config';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  username: string = 'Amir';
  signUp(fN: string, lN: string, email: string, pass: string) {
    return this.http.post(CONFIG.apiURL + '/signup',
      {
        firstName: fN,
        lastName: lN,
        email: email,
        password: pass
      },
      { observe: 'response', responseType: 'text' }
    );
  }
  login(email: string, pass: string) {
    return this.http.post(CONFIG.apiURL + '/signin',
      {
        email: email,
        password: pass
      },
      { observe: 'response', responseType: 'text' }
    );
  }
  get isLoggedIn(): boolean {
    return true;
    // return this.username !== null;
  }
  get allUsers() { return null; }
  getCurrentUser() { return this.http.get(CONFIG.apiURL + '/currentuser'); }
  constructor(private http: HttpClient) {
    this.getCurrentUser().subscribe(v => {
      this.username = v['user'];
    });
  }
}
