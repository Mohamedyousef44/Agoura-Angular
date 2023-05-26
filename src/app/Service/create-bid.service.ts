import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Environment} from "../../Environment/env"

@Injectable({
  providedIn: 'root'
})
export class CreateBidService {
  private readonly Base_URL = Environment.apiUrl;
  private headers=new HttpHeaders({'content-type': 'multipart/form-data'});
  constructor(private myClient:HttpClient) {

  }
  post(bid:any){
    return this.myClient.post(`${this.Base_URL}/place/create`,bid)
  }
}
