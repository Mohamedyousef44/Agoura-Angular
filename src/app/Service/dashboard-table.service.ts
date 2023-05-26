import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Environment} from "../../Environment/env"

@Injectable({
  providedIn: 'root'
})
export class DashboardTableService {
  private readonly Base_URL = Environment.apiUrl+"/dashboard";
  constructor(private readonly myClient: HttpClient) { }

  GetAllAppartment() {
    return this.myClient.get(this.Base_URL + "/appartments" );
  }
  GetAllCharts() {
    return this.myClient.get(this.Base_URL + "/charts" );
  }

  GetAllUsers() {
    return this.myClient.get(this.Base_URL + "/allusers" );
  }

  GetPlaceById(id: any) {
    return this.myClient.get(this.Base_URL + `/appartments/${id}`);
  }
}
