import { Component } from '@angular/core';
import { MainPageService } from 'src/app/Service/main-page.service';




@Component({

  selector: 'app-main-page-items-section',
  templateUrl: './main-page-items-section.component.html',
  styleUrls: ['./main-page-items-section.component.css']

})
export class MainPageItemsSectionComponent {

  allItems:any;
  constructor(public myService:MainPageService){}

  ngOnInit(): void {
    this.myService.GetAllItems().subscribe(
      {
        next:(data: any)=>{
          console.log(data)
          this.allItems = data;
        },
        error:(err: any)=>{console.log(err)}
      }
    )
  }
}
