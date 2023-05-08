import { Component } from '@angular/core';
import { UserHomeDataService } from 'src/app/Service/user-home-data.service';


@Component({

  selector: 'app-main-page-items-section',
  templateUrl: './main-page-items-section.component.html',
  styleUrls: ['./main-page-items-section.component.css']

})
export class MainPageItemsSectionComponent {

  items:any;
  constructor(public myService:UserHomeDataService){}

  ngOnInit(): void {
    this.myService.getData().subscribe(
      {
        next:(data: any)=>{
          console.log(data['apartments'][0])
          this.items = data['apartments'];
        },
        error:(err: any)=>{console.log(err)}
      }
    )
  }

  addToCart(id: any){
    console.log(id)
    this.myService.addItemToCart(id)
  }
}
