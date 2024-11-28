import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: User[] = [
    {
      id: 1,
      name: 'Andres',
      lastName: 'Tellez',
      email: 'andres.tellez@mail.co',
      userName: 'ancrest',
      password: '123hawkja',
    },
    {
      id: 2,
      name: 'Carlos',
      lastName: 'Mendoza',
      email: 'carlos.mendoza@mail.co',
      userName: 'carlmendo',
      password: 'carlos123',
    },
    {
      id: 3,
      name: 'Laura',
      lastName: 'Gonzalez',
      email: 'laura.gonzalez@mail.co',
      userName: 'lauragonz',
      password: 'lauraPass456',
    },
    {
      id: 4,
      name: 'Miguel',
      lastName: 'Lopez',
      email: 'miguel.lopez@mail.co',
      userName: 'miguellopez',
      password: 'miguel7890',
    },
    {
      id: 5,
      name: 'Sofia',
      lastName: 'Ramirez',
      email: 'sofia.ramirez@mail.co',
      userName: 'sofiarami',
      password: 'sofia1234',
    },
  ];
  constructor() {}

  findAll(): Observable<User[]> {
    return of(this.users);
  }
}
