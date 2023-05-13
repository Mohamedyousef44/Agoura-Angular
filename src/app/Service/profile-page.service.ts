import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfilePageService {

  private readonly Base_URL = "http://localhost:9000/users";


  @Output() ID = new EventEmitter<any>();

  constructor(private readonly myClient: HttpClient) { }


  GetUserByID(id: any) {
    this.ID.emit(id)
    return this.myClient.get(this.Base_URL + "/" + id);
  }

  UpdateUser(newUser: any, id: any) {

    return this.myClient.put(this.Base_URL + "/" + id, newUser)

  }
}
function output(): (target: ProfilePageService, propertyKey: "ID") => void {
  throw new Error('Function not implemented.');
}

