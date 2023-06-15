import { Component } from '@angular/core';

@Component({
    selector:'app-server',
  templateUrl: './server.component.html',
  styles:
    [`
      .online{
        color:purple;
      }

    `]
})
export class ServerComponent{

  ServerId: number = 10;
  ServerStatus: string = 'offline';


  constructor() {
    this.ServerStatus = Math.random() > 0.5 ? 'Online' : 'offline';
    console.log(Math.random());
  }

  getServerStatus() {

    return this.ServerStatus
  }
  getColor() {
    return this.ServerStatus == 'Online' ? 'green' : 'red';
  }

}
