import { Component } from '@angular/core';

@Component({
  selector: 'app-serve',
  templateUrl: './serve.component.html',
  styleUrls: ['./serve.component.css'],
})
export class ServeComponent {
  server: string;
  status: string;
  constructor() {
    this.server = Math.random() < 0.5 ? 'green' : 'red';
  }
  getStatus() {
    if (this.server == 'green') {
      return (this.status = 'Online');
    } else {
      return (this.status = 'Offline');
    }
  }
}
