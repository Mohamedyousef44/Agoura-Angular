import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BidsService } from 'src/app/Service/bids.service';

@Component({
  selector: 'app-dashboard-users',
  templateUrl: './dashboard-users.component.html',
  styleUrls: ['./dashboard-users.component.css']
})
export class DashboardUsersComponent implements  OnInit{
allUsers:any
  constructor(private myService:BidsService,private route:ActivatedRoute,private router:Router){}

  ngOnInit(): void {

  }

}
