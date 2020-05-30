import { Component, Inject } from '@angular/core';
import { DialogModalComponent } from '../dialog-modal/dialog-modal.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface LoginData {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
})
export class LoginModalComponent extends DialogModalComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: LoginData
  ) {
    super(dialogRef, data);
   }

   login() {
     console.log(this.data);
   }

   signup() {
     console.log(this.data)
   }
}
