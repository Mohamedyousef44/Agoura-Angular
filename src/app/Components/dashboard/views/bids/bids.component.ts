import { Component } from '@angular/core';
import { DashboardTableService } from 'src/app/Service/dashboard-table.service';

@Component({
  selector: 'app-bids',
  templateUrl: './bids.component.html',
  styleUrls: ['./bids.component.css']
})
export class BidsComponent {
  allAppartments:any
  constructor(public myService:DashboardTableService){}
  ngOnInit(): void {
    this.myService.GetAllAppartment().subscribe(
      {
        next:(data: any)=>{
        console.log(data[1]);
        this.allAppartments=data;
        },
        error:(err: any)=>{console.log(err)}
      }
    )
  }
}
