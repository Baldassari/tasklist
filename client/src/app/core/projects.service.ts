import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  email: string;
  constructor(private http: HttpClient, private userService: UserService) { 
    this.userService.email.subscribe(v => this.email = v);
  }

  getProjects() {
    return this.http.get(`http://localhost:3000/projects?email=${this.email}`)
    .pipe(tap(x => console.log(x)))
  }

  addProject(name: string) {
    if (name === undefined) return;
    return this.http.post('http://localhost:3000/projects', { email: this.email, name: name })
      .pipe(tap(x => console.log(x)))
  }

}
