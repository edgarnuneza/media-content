import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { User } from '../user';
import { USERS } from '../mock-users';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UserModalComponent } from '../user-modal/user-modal.component';
import { UsersService } from '../services/users.service';


@Component({
  selector: 'app-user-content',
  templateUrl: './user-content.component.html',
  styleUrls: ['./user-content.component.scss'],
})
export class UserContentComponent implements OnInit {
  users!: any;
  //validatingForm!: FormGroup;

  constructor(private render: Renderer2, private elementRef: ElementRef, public matDialog: MatDialog, private userService: UsersService) { }

  ngOnInit(): void {
    this.userService.get().subscribe((res) => {
      this.users = res;
      this.users.createdAt = new Date(this.users.createdAt);

    }, (res) => {
      console.log(res);
      console.log("fallo");
    });
  }

  getDate(dat: any) {
    let date = new Date(dat);
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
    dialogConfig.disableClose = false;
    const modalDialog = this.matDialog.open(UserModalComponent, dialogConfig);
  }

}