import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from '../storageSerice/storage.service';

const AUTH_API = "http://localhost:8080/api/auth";

const headers = new HttpHeaders({
  'Content-Type': 'application/json'
});

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient, 
    private storageService: StorageService
  ) { }
  
  register(username: string, email: string, password: string, requestedRoles: string[]): Observable<any> {
    return this.http.post(
      AUTH_API + '/signup',
      {
        username,
        email,
        password,
        requestedRoles
      },
      { headers }
    );
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + "/sign-in",
      {
        username,
        password
      },
      { headers, observe: 'response'}
    );
  }

  createAuthorizationHeader(): any {
    const accessToken = this.storageService.getItem('ACCESS_TOKEN');
    if (accessToken) {
      return new HttpHeaders().set(
        'Authorization', 'Bearer ' + accessToken
      )
    } else {
      console.log("JWT token not found in the Local Storage");
    }
    return null;
  }
}
