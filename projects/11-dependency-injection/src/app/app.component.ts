import { Component, OnInit, inject } from '@angular/core';

import { User } from './data';
import { UserInfoComponent } from "./user-info/user-info.component";
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  standalone: true,
 imports: [UserInfoComponent],
  template: ` <h1>User Listing</h1>
  @for(user of userData; track user.id) {
    <app-user-info [user]="user" />
  }
   `,
})
export class AppComponent implements OnInit {
  userService = inject(UserService);
  userData: User[] = [];

  // constructor cannot be async, but ngOnInit can
  async ngOnInit() {
   const data = await this.userService.getUserData();
    this.userData = data;
  }
  
  // constructor() {
  //   this.userService.getUserData().then((data) => {
  //     this.userData = data;
  //   })
  // }
}
