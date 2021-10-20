import { Component, OnInit } from '@angular/core';
import { User } from '../user'
import { USERS } from '../mock-users'

@Component({
  selector: 'app-user-content',
  templateUrl: './user-content.component.html',
  styleUrls: ['./user-content.component.scss']
})
export class UserContentComponent implements OnInit {

  users = USERS;

  constructor() { }

  ngOnInit(): void {

  }

  getDate(date: Date) {
    let months: string[] = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    let day = (date.getDate() < 10) ? `0${date.getDate()}` : date.getDate();

    return `${day} ${months[date.getMonth()]} ${date.getFullYear()}`;
  }

}