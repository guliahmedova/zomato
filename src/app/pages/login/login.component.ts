import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  loginObj: Login = {
    userName: '',
    password: '',
    accessToken: "",
    userId: 1
  };

  constructor(private router: Router) { }

  onLogin() {
    const hardcodedUser = {
      userId: 1,
      userName: 'user',
      password: '123',
      accessToken: "OOOuKoDG9T7L9AHLfsTkuXkYLH9KEJxatO0ozqc1fQxqD1sswT8p0KvOgfdxP4FA"
    };

    if (this.loginObj.userName === hardcodedUser.userName && this.loginObj.password === hardcodedUser.password) {
      localStorage.setItem('user_id', JSON.stringify(this.loginObj.userId));
      this.router.navigateByUrl('/foodCategory');
    } else {
      alert("Username or password is not correct!");
    }
  }
}

export interface Login {
  userId: number;
  userName: string;
  password: string;
  accessToken: string;
}
