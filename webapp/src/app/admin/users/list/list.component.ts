import { Component } from '@angular/core';
import { User } from '../../../shared/sdk/models/User'
import { FireLoopRef } from '../../../shared/sdk/models/FireLoopRef'
import { RealTime } from '../../../shared/sdk/services/core/real.time'

@Component({
  selector: 'app-user-list',
  templateUrl: './list.component.html',
})
export class ListComponent {

  private users: User[] = new Array<User>();
  private userRef: FireLoopRef<User>;

  constructor(private rt: RealTime) {
    this.rt.onReady().subscribe(() => {
      this.userRef = this.rt.FireLoop.ref<User>(User);
      this.userRef.on('change').subscribe((users: User[]) => this.users = users);
      // this.userRef.stats().subscribe((stats: any) => {
      //   let data = new Array();
      //   stats.forEach((stat: any) => {
      //     data.push(stat.count);
      //   });
      // });
    });
  }

  create(user: User): void {
    this.userRef.create(user).subscribe();
  }

  update(user: User): void {
    this.userRef.upsert(user).subscribe();
  }

  // done(user: User): void {
  //   user.done = !user.done
  //   console.log('done', user)
  //   this.userRef.upsert(user).subscribe();
  // }

  remove(user: User): void {
    this.userRef.remove(user).subscribe();
  }

}
