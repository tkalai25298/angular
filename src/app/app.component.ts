import { Component,OnInit } from '@angular/core';
import { ServtestService } from './servtest.service';

@Component({
  selector: 'app-root',
  template :
    `<input id = "name" type="text">
    <button (click)="onClick()">plz click</button>
    <button (click)="click ='its a button click'">onclick</button>
    {{click}}
    <input [(ngModel)]="username" type="text">
    {{username}}

    <ul *ngFor="let name of names">
     <li>{{name.id}} - {{name.name}}</li>
    </ul>
    `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'binding';
  public name = "input1";
  public click = "";
  public username = "";
  onClick(){
    this.click="clicked succesful";
  }

  // using services
  public names:any = [];
  constructor(private _names: ServtestService){}
  ngOnInit(){
    //this.names = this._names.getNames();

    this._names.getNames()
      .subscribe(data => this.names = data);

    console.log(this.names);
      }
}

