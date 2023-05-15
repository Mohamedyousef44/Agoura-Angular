import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Environment} from '../../Environment/env'


@Injectable({
  providedIn: 'root',
})
export class BidsService {
  private readonly Base_URL = Environment.apiUrl;
  constructor(private myClient: HttpClient) {}
  GetBidById(id: any) {
    return this.myClient.get(this.Base_URL + `/place/${id}`);
  }

  GetBidHistoryById(itemId: any) {
    return this.myClient.get(this.Base_URL + `/place/${itemId}/history`);
  }
  addNewBid(data: any) {
    return this.myClient.post(this.Base_URL + `/bid`,data);
  }
}
