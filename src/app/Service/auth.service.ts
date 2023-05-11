import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly Base_URL = "http://localhost:9000";
  private headers=new HttpHeaders({'content-type': 'json/text'});
  constructor(private myHttpClient:HttpClient) { 

  }

  public signUp(user:any){
    return this.myHttpClient.post(`${this.Base_URL}/register`,user)
  }
  public LoginWithGoogle(userCredential:any){
    return this.myHttpClient.post(`${this.Base_URL}/auth/google`,userCredential,{'headers' : new HttpHeaders ({'Content-Type' : 'application/json'}), observe:'response'})
  }
}
