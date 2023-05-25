import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root',
})
export class ProfilePageService {
  private readonly Base_URL = 'https://agora-node-server.onrender.com/users';

  @Output() Image = new EventEmitter<any>();

  constructor(
    private readonly myClient: HttpClient,
    private spinner: NgxSpinnerService
  ) {}

  GetUserByID(id: any) {
    return this.myClient.get(this.Base_URL + '/' + id);
  }

  UpdateUser(newUser: any, id: any) {
    return this.myClient
      .put(this.Base_URL + '/' + id, newUser)
      .subscribe((info) => {
        this.Image.emit(info);
        this.spinner.hide('updateSpinner');
      });
  }

  getUserBids(id: any) {
    return this.myClient.get(this.Base_URL + '/' + id + '/bids');
  }

  getUserOrders(id: any) {
    return this.myClient.get(this.Base_URL + '/' + id + '/orders');
  }

  getUserApartments(id: any) {
    return this.myClient.get(this.Base_URL + '/' + id + '/apartments');
  }

  changeUserPassword(id: any, newPass: any) {
    return this.myClient.put(
      this.Base_URL + '/' + id + '/changepassword',
      newPass
    );
  }
  changeUserPicture(id: any, newImage: any) {
    return this.myClient.put(this.Base_URL + '/' + id + '/picture', newImage);
  }
}
