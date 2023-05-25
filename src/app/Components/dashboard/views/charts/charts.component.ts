import { Component, OnInit } from '@angular/core';
import { DashboardTableService } from 'src/app/Service/dashboard-table.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit{
  chart2:any;
  chart3:any;
  labels=['January', 'February', 'March', 'April', 'May','June', 'July','August','September','October','December','December'];
  data1:any;
  data2:any;
  data3:any;
  usersChart1:any;
  colors=["red","orange","yellow","green","blue","gray"]

  constructor(private dashboardService:DashboardTableService){

  }
  ngOnInit(): void {
    this.dashboardService.GetAllCharts().subscribe({
      next:(res:any)=>{
        this.chart2=res.data.users[0].years;
        this.chart3=res.data.apartmentsData;
        let bidsDataset=res.data.bids[0].years.map((year:any,index:any)=>{
          let counts =this.handleCharts(year).map((bid:any)=>{
            return bid.count
          })
          return {
            label: year.year,
            backgroundColor: this.colors[index],
            data: counts
          }
        })
        this.usersChart1=this.handleCharts(this.chart2[0]).map((user:any)=>{
          return user.count
        })
        this.data1 = {
          labels: this.labels,
          datasets: [
            {
              label: "2023",
              backgroundColor: 'rgba(151, 187, 205, 0.2)',
              borderColor: 'rgba(151, 187, 205, 1)',
              pointBackgroundColor: 'rgba(151, 187, 205, 1)',
              pointBorderColor: '#fff',
              data: this.usersChart1
            }
          ]
        };
        this.data2 = {
          labels: this.labels,
          datasets: bidsDataset
        };
        this.data3 = {
          labels: this.chart3.map((apt:any)=>{
            return apt._id
          }),
          datasets: [
            {
              label: this.chart3.map((apt:any)=>{
                return apt._id
              }),
              backgroundColor: this.colors.slice(0,this.chart3.length)
              ,
              data: this.chart3.map((apt:any)=>{
                return apt.count
              })
            },
          ]
        };
      },
      error:(err:any)=>{
        console.error(err)
      }
    })
    
  }

  handleChartRef($chartRef: any) {
    if ($chartRef) {
      setTimeout(() => {
        $chartRef?.update();
      }, 3000);
    }
  }

  handleCharts=(arr:any)=>{
    arr.months.sort( this.compare );
    let temp:any=[];
    for(let i=0 ; i<12;i++){
      temp[i]={month: i+1, count: 0}
    }
    for(let i=0 ; i<arr.months.length;i++){
      temp[arr.months[i].month-1]={month: arr.months[i].month, count: arr.months[i].count}
    }
    return temp
  }
  compare=( a:any, b:any )=> {
    if ( a.month < b.month ){
      return -1;
    }
    if ( a.month > b.month ){
      return 1;
    }
    return 0;
  }

}
