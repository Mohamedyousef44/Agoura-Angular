import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserHomeDataService } from 'src/app/Service/user-home-data.service';


@Component({

  selector: 'app-main-page-items-section',
  templateUrl: './main-page-items-section.component.html',
  styleUrls: ['./main-page-items-section.component.css']

})
export class MainPageItemsSectionComponent {

  items:any;

  constructor(public myService:UserHomeDataService , private spinner: NgxSpinnerService){}

  ngOnInit(): void {
    this.spinner.show('homeSpinner')
    this.myService.getData().subscribe(
      {
        next:(data: any)=>{
          this.items = data['apartments'];
          this.spinner.hide('homeSpinner')
        },
        error:(err: any)=>{console.log(err)}
      }
      )
  }

  addToCart(id: any){
    this.myService.addItemToCart(id)
  }


  filterData(category:any){

    this.myService.getFilteredData(category).subscribe({
      next:(response:any)=>{
        console.log(response.data)
        this.items= response.data

      },
      error:(error:any)=>{
        return error
      }
     })



}


}
