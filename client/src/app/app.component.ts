import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginModalComponent } from './components/login-modal/login-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';
  email: string;
  password: string;
  name: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.openLogin();
  }
  
  openLogin() {
    const dialogRef = this.dialog.open(LoginModalComponent, {
      width: '300px',
      data: { email: this.email, password: this.password }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    })
  }

}
