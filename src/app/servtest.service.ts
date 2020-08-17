import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {iname} from './name';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServtestService {
  private _url: string = "/home/hl-kalai/angular/binding/src/names.json";
  constructor(private http:HttpClient) { }
  
  // getNames(){
  //   return [
  //     {"id":1,"name":"kalai"},
  //     {"id":2,"name":"sang"}
  //   ];
  // }
 
  getNames(): Observable<iname[]>{
    return this.http.get<iname[]>(this._url);
  }
}
