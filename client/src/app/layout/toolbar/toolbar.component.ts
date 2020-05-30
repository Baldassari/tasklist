import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginModalComponent } from 'src/app/components/login-modal/login-modal.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  email: string;
  password: string;
  name: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openLogin() {
    console.log('openLogin')
    const dialogRef = this.dialog.open(LoginModalComponent, {
      width: '300px',
      data: { email: this.email, password: this.password }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    })
  }

  openSignup() {
    console.log('openSignup')
  }

}
