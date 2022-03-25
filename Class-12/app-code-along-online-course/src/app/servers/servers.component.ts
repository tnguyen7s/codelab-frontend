import { HtmlParser } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  allowNewUser = false;
  serverCreationStatus = 'No server created.';
  serverCreated = false;
  serverName="";
  username="";
  constructor() {
    setTimeout(()=>{
      this.allowNewServer = true;
    },2000);
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreationStatus = "Server was created!";
    this.serverCreated=true;
  }

  onUpdateServerName(event){
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onUpdateUsername(event)
  {

    this.allowNewServer = ((<HTMLInputElement>event.target).value)? true:false;
  }
  onClickAddUsername()
  {
    this.username="";
  }
}
