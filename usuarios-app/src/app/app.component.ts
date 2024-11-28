import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserAppComponent } from './components/user-app.component';
import { UserComponent } from './components/user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserAppComponent, UserComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'usuarios-app';
}
