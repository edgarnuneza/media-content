import { Component, OnInit } from '@angular/core';
// import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss']
})
export class UserModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  close(): void {
    //this.dialogRef.close();
  }

}
