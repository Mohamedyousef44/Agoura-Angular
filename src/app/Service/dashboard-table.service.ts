import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardTableService {
  private readonly Base_URL = "http://localhost:9000";
  constructor(private readonly myClient: HttpClient) { }

  GetAllAppartment() {
    return this.myClient.get(this.Base_URL + "/dashboard" );
  }

  GetAllUsers() {
    return this.myClient.get(this.Base_URL + "/dashboard/allusers" );
  }
}
