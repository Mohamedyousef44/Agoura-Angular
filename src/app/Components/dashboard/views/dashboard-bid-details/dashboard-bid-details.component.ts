import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BidsService } from 'src/app/Service/bids.service';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { DashboardTableService } from 'src/app/Service/dashboard-table.service';

@Component({
  selector: 'app-dashboard-bid-details',
  templateUrl: './dashboard-bid-details.component.html',
  styleUrls: ['./dashboard-bid-details.component.css']
})
export class DashboardBidDetailsComponent implements OnInit{

  placeObj:any;
  form!:FormGroup;
  constructor(private dasboardService:DashboardTableService,private myService:BidsService,private route:ActivatedRoute,private router:Router){

  }
  sendNotes(){
    if(this.form.valid){
      this.myService.bidNeedsMoreInfo(this.placeObj._id,this.form.value).subscribe({
        next:(res:any)=>{
          console.log(res)
          if(res.success){
            this.placeObj=res.data.appartment
          }
          // this.router.navigateByUrl("/dashboard/bids/"+this.route.snapshot.params["id"])
        },
        error:(err)=>{
          console.log(err)
        }
      })
    }
  }
  approve(){
    this.myService.approveBidById(this.placeObj._id,{_id:this.placeObj._id}).subscribe({
      next:(res:any)=>{
        console.log(res)
          if(res.success){
            this.placeObj=res.data.appartment
          }

        // this.router.navigateByUrl("/dashboard/bids/"+this.route.snapshot.params["id"])
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
  cancel(){
    this.myService.cancelBidById(this.placeObj._id,{_id:this.placeObj._id}).subscribe({
      next:(res:any)=>{
        console.log(res)
          if(res.success){
            this.placeObj=res.data.appartment
          }

        // this.router.navigateByUrl("/dashboard/bids/"+this.route.snapshot.params["id"])
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
  ngOnInit(): void {
    this.form=new FormGroup({
      notes: new FormControl("",Validators.minLength(50)),
    })
    let placeId=this.route.snapshot.params["id"]
    this.dasboardService.GetPlaceById(placeId).subscribe({
      next:(res:any)=>{
        console.log(res)
        if(res.success){
          this.placeObj=res.data.appartment
          console.log(res.data.appartment.images)
        }
      },
      error:(err)=>{  
        this.router.navigateByUrl(`404-NotFound`)
        console.log(err)
      }
    })
    
  }
}
