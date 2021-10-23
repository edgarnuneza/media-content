import { Component, OnInit, ElementRef, Renderer2, Input } from '@angular/core';
// import { MatDialogRef } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss']
})
export class UserModalComponent implements OnInit {
  @Input()
  userName: string;
  email: string;
  name: string;
  lastName: string;
  password: string;
  conPassword: string;
  selectedValue: string;


  constructor(private userService: UsersService, public dialogRef: MatDialogRef<UserModalComponent>, private elementRef: ElementRef, private renderer: Renderer2) {
    this.userName = "";
    this.email = "";
    this.name = "";
    this.lastName = "";
    this.password = "";
    this.conPassword = "";
    this.selectedValue = "";
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {

  }

  closeModal() {
    this.dialogRef.close();
  }

  sendData() {
    this.userName = this.elementRef.nativeElement.querySelector("#username").value;
    this.email = this.elementRef.nativeElement.querySelector("#email").value;
    this.name = this.elementRef.nativeElement.querySelector("#nombre").value;
    this.lastName = this.elementRef.nativeElement.querySelector("#apellido").value;
    this.password = this.elementRef.nativeElement.querySelector("#password").value;
    this.conPassword = this.elementRef.nativeElement.querySelector("#con-password").value;

    this.userService.create({ "userName": this.userName, "name": this.name, "lastName": this.lastName, "email": this.email, "password": this.password, "privilege": 1 }).subscribe(
      (res) => {
        console.log("Jalo");
        console.log(res);
        this.dialogRef.close();
      }, (res) => {
        console.log(res);
      }

    );

    // this.email = document.querySelector("#email")!.value
    // this.name = document.querySelector("#nombre")!.value
    // this.lastName = document.querySelector("#apellido")!.value
    // this.password = document.querySelector("#password")!.value
    // this.conPassword = document.querySelector("#con-password")!.value
  }




}
