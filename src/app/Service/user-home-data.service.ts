import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserHomeDataService {

  private BaseURL: string

  constructor(private user: HttpClient) {
    this.BaseURL =  "http://localhost:9000/home"
  }
  getData(){
    return this.user.get(this.BaseURL)
  }
  @Output() cartUpdated = new EventEmitter<any>();


  deleteNotification(id: any){
    this.user.delete(this.BaseURL+'/notifications/'+`${id}`).subscribe(
      (response) => {
        console.log('Resource deleted successfully.');
      },
      (error) => {
        console.error('An error occurred while deleting the resource:', error);
      }
    );
  }

  deleteProductFromCart(id: any){
    this.user.delete(this.BaseURL+'/cart/'+`${id}`).subscribe(
      (response) => {
        console.log('Resource deleted successfully.');
      },
      (error) => {
        console.error('An error occurred while deleting the resource:', error);
      }
    );
  }

  addItemToCart(id: any){
    this.user.post(this.BaseURL+'/cart', {id}).subscribe(response => {
      console.log(response);
      this.cartUpdated.emit(response);
    }, error => {
      console.error(error);
    });
  }
}
