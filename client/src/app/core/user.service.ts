import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import { tap } from "rxjs/operators";
import { Observable, Subject } from 'rxjs';
import { mixinTabIndex } from '@angular/material/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  name: string;
  email: Subject<string> = new Subject();
  token: Subject<string> = new Subject();
  constructor(private http: HttpClient, private snakBar: MatSnackBar) { }

  login(email: string, password: string): Observable<any> {
    this.email.next(email);
    return this.http.post('http://localhost:3000/users/login', { email: email, password: password })
      .pipe(
        tap((response) => {
          this.token.next(response.data?.token)
        }, (error) => {})
      )
  }
}
