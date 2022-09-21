import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly APIUrl="https://localhost:7172/api";

  constructor(private http:HttpClient) { }
  getcards():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Cards');
  }
  addcards(val:any){
    return this.http.post(this.APIUrl+'/MasterCard',val);
  }
  updatecard(val:any){
    return this.http.put(this.APIUrl+'/MasterCard',val);
  }
  getmaster():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/MasterCard');
  }
  deleteuser(){
    return this.http.delete(this.APIUrl+'/MasterCard');
  }
  deleteuserid(val:any){
    return this.http.delete(this.APIUrl+'/MasterCard'+'/'+val);
  }
  getcardbyid(id:any):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/MasterCard'+'/'+id);
  }
  islogedin(val:any)
  {
    return val;
  }
}
