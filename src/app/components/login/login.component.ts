import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/authService/auth.service';
import { StorageService } from 'src/app/services/storageSerice/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  form: any = {
    username: null,
    password: null
  };

  isLoggedIn: boolean = false;
  roles: string[] = [];
  errorMessage: string = '';

  constructor(private authService: AuthService, private storageService: StorageService) {}

  ngOnInit(): void {
    if(this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;
    this.authService.login(username, password).subscribe({
      next: data => {
        this.storageService.saveUser(data);
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().roles;
        this.reloadPage();
      },
      error: e => {
        this.errorMessage = e.error.message;
        this.isLoggedIn = false;
      }
    });
  } 

  reloadPage(): void {
    window.location.reload();
  }
}