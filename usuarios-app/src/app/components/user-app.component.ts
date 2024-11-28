import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { UserComponent } from './user/user.component';
import { UserFormComponent } from './user-form/user-form.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'user-app',
  standalone: true,
  imports: [UserComponent, UserFormComponent],
  templateUrl: './user-app.component.html',
  styleUrls: ['./user-app.component.css'],
})
export class UserAppComponent implements OnInit {
  tittle: string = 'Listado de Usuarios!';

  users: User[] = [];

  userSelected!: User;

  open: boolean = false;

  constructor(private service: UserService) {
    this.userSelected = new User();
  }

  ngOnInit(): void {
    this.service.findAll().subscribe((users) => (this.users = users));
  }

  addUser(user: User) {
    if (user.id > 0) {
      this.users = this.users.map((u) => (u.id == user.id ? { ...user } : u));
    } else {
      // agregar el valorpero que sea inmutable, pero el segundo objetoes otra instancia distinta del objeto
      this.users = [...this.users, { ...user, id: new Date().getTime() }];
    }
    Swal.fire({
      title: 'Guardado!',
      text: 'Usuario guardado con exito!',
      icon: 'success',
    });
    this.userSelected = new User();
    this.setOpen();
  }

  removeUser(id: number): void {
    Swal.fire({
      title: 'Seguro que quiere eliminar?',
      text: 'Cuidado el usuario sera eliminado del sistema!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
    }).then((result) => {
      if (result.isConfirmed) {
        // cuando es distinto al id lo dejamo pasar y cuando es igual no lo dejamos pasar
        this.users = this.users.filter((user) => user.id != id);
        Swal.fire({
          title: 'Eliminado!',
          text: 'Usuario eliminado con exito.',
          icon: 'success',
        });
      }
    });
  }

  setSelectedUser(userRow: User): void {
    // se desestructura y se clona ára que no sea la misma instancia de la fila
    this.userSelected = { ...userRow };
    this.open = true;
  }

  setOpen() {
    this.open = !this.open;
  }
}
