import { Component, EventEmitter, Output } from '@angular/core';
import { User } from '../../../shared/sdk/models/User'

@Component({
  selector: 'app-user-form',
  template: `
    <form (submit)="submit()">
      <div class="input-group">
        <input class="form-control" required name="user" type="text" [(ngModel)]="user.text" placeholder="Add User" />
        <span class="input-group-btn">
          <button class="btn btn-secondary">Add User</button>
        </span>
      </div>
    </form>
  `,
})
export class FormComponent {

  public user: User = new User();

  submit() {
    this.create.emit(this.user);
    this.user = new User();
  }

  @Output() create = new EventEmitter();
}
