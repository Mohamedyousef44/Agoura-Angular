import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserHomeDataService {

  private BaseURL: string

  constructor(private user: HttpClient) {
    this.BaseURL =  "http://localhost:3000/users"
  }
  getUser(){
    return this.user.get(this.BaseURL)
  }
  getUserById(id: number){
    return this.user.get(this.BaseURL+`/${id}`)
  }
}
