import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../../shared/sdk/models/User'

@Component({
  selector: 'app-user-list-item',
  templateUrl: './list-item.component.html',
})
export class ListItemComponent {

  @Input() public user: User;

  @Output() update = new EventEmitter();
  @Output() remove = new EventEmitter();
  @Output() done = new EventEmitter();

}
