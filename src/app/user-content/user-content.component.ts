import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { User } from '../user';
import { USERS } from '../mock-users';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UserModalComponent } from '../user-modal/user-modal.component';


@Component({
  selector: 'app-user-content',
  templateUrl: './user-content.component.html',
  styleUrls: ['./user-content.component.scss'],
})
export class UserContentComponent implements OnInit {
  users = USERS;
  //validatingForm!: FormGroup;

  constructor(private render: Renderer2, private elementRef: ElementRef, public matDialog: MatDialog) { }

  ngOnInit(): void {

  }

  getDate(date: Date) {
    let months: string[] = [
      'Ene',
      'Feb',
      'Mar',
      'Abr',
      'May',
      'Jun',
      'Ago',
      'Sep',
      'Oct',
      'Nov',
      'Dic',
    ];
    let day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();

    return `${day} ${months[date.getMonth()]} ${date.getFullYear()}`;
  }

  getFirstLetters(name: string, lastName: string) {
    return `${name[0] + lastName[0]}`;
  }

  collapsible(num: number): void {
    const elemets = this.elementRef.nativeElement.querySelectorAll(`.info-${num}`);

    for (let infoEle of elemets) {
      infoEle.classList.toggle("show");
    }
  }

  createClassName(num: number): string {
    return `info-${num}`;

  }

  updateUser() {
    // const dialogRef = this.dialog.open(UserModalComponent);
  }

  openModal() {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = false;
    // dialogConfig.id = "modal-component";
    // dialogConfig.height = "350px";
    // dialogConfig.width = "600px";
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(UserModalComponent, dialogConfig);
  }

}