import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Environment} from '../../Environment/env';


@Injectable({
  providedIn: 'root'
})
export class ProfilePageService {

  private readonly Base_URL = Environment.apiUrl+"/users";

  constructor(private readonly myClient: HttpClient) { }


  GetUserByID(id: any) {
    return this.myClient.get(this.Base_URL + "/" + id);
  }

  UpdateUser(newUser: any, id: any) {

    return this.myClient.put(this.Base_URL + "/" + id, newUser)

  }
}
