import { Component, Inject } from '@angular/core';
import { DialogModalComponent } from '../dialog-modal/dialog-modal.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from 'src/app/core/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    @Inject(MAT_DIALOG_DATA) public data: LoginData,
    private userService: UserService,
    private snakBar: MatSnackBar
  ) {
    super(dialogRef, data);
   }

   login() {
     console.log(this.data);
     this.userService.login(this.data.email, this.data.password).subscribe(x => {
         this.dialogRef.close();
         this.snakBar.open(`Welcome ${x.response.data?.name}!`, null ,{duration: 2000})
      })
   }

   signup() {
     console.log(this.data)
   }
}
