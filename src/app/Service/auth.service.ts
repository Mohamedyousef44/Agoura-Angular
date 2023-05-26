import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import {Environment} from "../../Environment/env"
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly Base_URL = Environment.apiUrl;
  private headers=new HttpHeaders({'content-type': 'json/text'});
  constructor(private myHttpClient:HttpClient) {

  }

  public signUp(user:any){
    return this.myHttpClient.post(`${this.Base_URL}/register`,user)
  }
  public LoginWithGoogle(userCredential:any){
    return this.myHttpClient.post(`${this.Base_URL}/auth/google`,userCredential,{'headers' : new HttpHeaders ({'Content-Type' : 'application/json'}), observe:'response'})
  }

  public LoginWithSystem(userCredential:any){
    return this.myHttpClient.post(`${this.Base_URL}/auth/login`,userCredential,{'headers' : new HttpHeaders ({'Content-Type' : 'application/json'}), observe:'response'})
  }
  public verify(): boolean {
    const token = localStorage.getItem('X-Auth-Token');
    
    if (token) {
      const decodedToken: any = jwtDecode(token);
      return decodedToken.isAdmin === true;
    }
    return false;
  }
  public user() {
    const token = localStorage.getItem('X-Auth-Token');
    
    if (token) {
      const decodedToken: any = jwtDecode(token);
      return decodedToken
    }
    return false;
  }
  
}
