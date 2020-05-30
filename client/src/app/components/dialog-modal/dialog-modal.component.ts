import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface LoginData {
  email: string;
  password: string;
}

@Component({
  selector: 'app-dialog-modal',
  templateUrl: './dialog-modal.component.html',
  styleUrls: ['./dialog-modal.component.css']
})
export class DialogModalComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: LoginData
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
