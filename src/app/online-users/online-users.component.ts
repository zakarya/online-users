import { Component, OnInit } from '@angular/core';
import { trigger, transition, state, animate, style } from '@angular/animations';
import { IUser } from './user';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'dt-online-users',
  templateUrl: './online-users.component.html',
  styleUrls: ['./online-users.component.css'],
  animations: [
    trigger('openClose', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(500)
      ]),
      transition('* => void', [
        animate(500, style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
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
