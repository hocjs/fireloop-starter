import { Component, EventEmitter, Output } from '@angular/core';
import { User } from '../../../shared/sdk/models/User'

@Component({
  selector: 'app-user-form',
  templateUrl: './form.component.html',
})
export class FormComponent {

  public user: User = new User();

  submit() {
    this.create.emit(this.user);
    this.user = new User();
  }

  @Output() create = new EventEmitter();
}
