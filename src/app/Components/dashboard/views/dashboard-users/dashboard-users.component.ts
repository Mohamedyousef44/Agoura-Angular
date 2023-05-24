import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardTableService } from 'src/app/Service/dashboard-table.service';

@Component({
  selector: 'app-dashboard-users',
  templateUrl: './dashboard-users.component.html',
  styleUrls: ['./dashboard-users.component.css'],
})
export class DashboardUsersComponent implements OnInit {
  allUsers: any;
  constructor(
    private myService: DashboardTableService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
     this.myService.GetAllUsers().subscribe({
      next: (allData: any) => {
        console.log(allData.data)
        this.allUsers = allData.data;
        console.log(this.allUsers);
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
}
