import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BidsService {
  private readonly Base_URL = 'https://agora-node-server.onrender.com';
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
  updateBidById(id:number,data: any) {
    return this.myClient.put(this.Base_URL + `/bid/${id}/update`,data);
  }
  bidNeedsMoreInfo(id:number,data: any) {
    return this.myClient.post(this.Base_URL + `/bid/${id}/notes`,data);
  }
  approveBidById(id:number,data: any) {
    return this.myClient.post(this.Base_URL + `/bid/${id}/approve`,data);
  }

  cancelBidById(id:number,data: any) {
    return this.myClient.post(this.Base_URL + `/bid/${id}/cancel`,data);
  }

  

}
