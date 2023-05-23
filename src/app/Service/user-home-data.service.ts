import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class UserHomeDataService {

  private BaseURL: string
  private BaseURLForFilter: string


  constructor(private user: HttpClient , private spinner: NgxSpinnerService) {
    this.BaseURL =  "http://localhost:9000/home"
    this.BaseURLForFilter ='http://localhost:9000/home/apartments'
  }
  getData(){
    return this.user.get(this.BaseURL)
  }
  @Output() cartUpdated = new EventEmitter<any>();
  @Output() notificationUpdated = new EventEmitter<any>();
  @Output() cartError = new EventEmitter<any>();


  deleteNotification(id: any){
    this.user.delete(this.BaseURL+'/notifications/'+`${id}`).subscribe(
      (response) => {
        this.notificationUpdated.emit(response);
      },
      (error) => {
        console.error('An error occurred while deleting the resource:', error);
      }
    );
  }

  deleteProductFromCart(id: any){
    this.user.delete(this.BaseURL+'/cart/'+`${id}`).subscribe(
      (response) => {
        this.cartUpdated.emit(response);
      },
      (error) => {
        console.error('An error occurred while deleting the resource:', error.status);
        this.cartError.emit(true)
      }
    );
  }

  addItemToCart(id: any){
    this.spinner.show('cartSpinner')
    this.user.post(this.BaseURL+'/cart', {id}).subscribe(response => {
      this.cartUpdated.emit(response);
      this.spinner.hide('cartSpinner')
    }, error => {
      console.error(error);
    });
  }



  getFilteredData(category:any){
   this.user.get(this.BaseURLForFilter + "/" + category).subscribe({
    next:(response:any)=>{
      console.log(response.data)
      return response.data
    },
    error:(error:any)=>{
      return error
    }
   })

  }

}
