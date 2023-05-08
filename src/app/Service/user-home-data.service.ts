import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
  getUserById(id: number){
    return this.user.get(this.BaseURL+`/${id}`)
  }

  deleteNotification(id: any){
    this.user.delete(this.BaseURL+'/notifications/'+`${id}`).subscribe(
      (response) => {
        console.log('Resource deleted successfully.');
      },
      (error) => {
        console.error('An error occurred while deleting the resource:', error);
      }
    );
    console.log(this.BaseURL+'/notifications/'+`${id}`)
  }
  deleteProductFromCart(id: any){
    this.user.delete(this.BaseURL+'/cart/'+`${id}`)
  }
}
