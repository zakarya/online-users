import { Component, OnInit } from '@angular/core';
import { IUser } from './user';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'dt-online-users',
  templateUrl: './online-users.component.html',
  styleUrls: ['./online-users.component.css']
})
export class OnlineUsersComponent implements OnInit {
  errorMessage: string;
  imageWidth: number = 50;
  showUsers: boolean = false;
  users: IUser[];

  constructor(private userDataService: UserDataService) { }

  toggleUsers(): void {
    this.showUsers = !this.showUsers;
  }

  ngOnInit(): void {

    this.userDataService.getUsers().subscribe(
      users => {
        this.users = users;
      },
      error => this.errorMessage = <any>error
    );
  }

}
