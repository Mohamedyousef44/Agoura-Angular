import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly Base_URL = "http://localhost:9000";
  constructor(private myHttpClient:HttpClient) { 

  }

  public signUp(user:any){
    return this.myHttpClient.post(`${this.Base_URL}/register`,user)
  }
}
