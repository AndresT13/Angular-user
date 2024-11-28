import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
})
export class UserComponent {
  tittle: string = 'Listado de Usuarios!';

  @Input() users: User[] = [];

  @Output() idUserEventEmitter = new EventEmitter();

  @Output() selectUserEventEmitter = new EventEmitter();

  // del tipo void por que olamente va a emitir un valor
  onRemoveUser(id: number): void {
    this.idUserEventEmitter.emit(id);
  }

  onSelectUser(user: User): void {
    this.selectUserEventEmitter.emit(user);
  }
}
