import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Environment} from "../../Environment/env"

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  private readonly Base_URL = Environment.apiUrl;

  constructor(private myClient:HttpClient) { 

  }

  getOrderDetails(id:any){
    return this.myClient.get(`${this.Base_URL}/checkout/${id}`)
  }
  checkout(id:any,data:any){
    return this.myClient.post(`${this.Base_URL}/checkout/${id}`,data)
  }
}
