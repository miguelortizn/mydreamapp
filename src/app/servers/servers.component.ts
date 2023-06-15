import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  //styleUrls: ['./servers.component.css']
  
})
export class ServersComponent implements OnInit {
  allowServer = false;
  isEmpty = true;
  serverCreationStatus = 'No server was created';
  serverName = 'Testserver';
  userName: string = '';
  serverCreated = false;
  servers = ['Testserver', 'Testserver2'];

  constructor() {

    setTimeout(() => { this.allowServer = true; }, 2000)
     
  }
  ngOnInit() {

  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created name is ' + this.serverName;
  }

  //OnUpdateServerName(event: Event) {
  //  this.serverName = (<HTMLInputElement>event.target).value;

  //}

  ValidateValue(user: string): boolean {
    if (user == '') {
      return true;
    } else {return false }
  }

  onRestButons() {
    this.userName = '';

  }

} 
