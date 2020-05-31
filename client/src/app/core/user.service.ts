import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import { tap } from "rxjs/operators";
import { Observable } from 'rxjs';
import { mixinTabIndex } from '@angular/material/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  email: string;
  token: string;
  constructor(private http: HttpClient, private snakBar: MatSnackBar) { }

  login(email: string, password: string): Observable<any> {
    this.email = email;
    return this.http.post('http://localhost:3000/users/login', { email: email, password: password }, 
    { headers: { 'Access-Control-Allow-Origin': '*' }})
      .pipe(
        tap((response) => {
          this.token = response.data?.token
        }, (error) => {})
      )
  }
}
