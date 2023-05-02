import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainPageService {

  private readonly Base_URL = "http://localhost:3000/users";

  constructor(private readonly myClient:HttpClient) { }



  GetAllItems(){
    //method[Get-Delete-Put-Patch]
    return this.myClient.get(this.Base_URL);
  }
  GetUserByID(id:any){
    return this.myClient.get(this.Base_URL+"/"+id);
  }

}
