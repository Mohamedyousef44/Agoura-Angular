import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BidsService } from 'src/app/Service/bids.service';
import { ToastService } from 'src/app/Service/toast-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  
  form!:FormGroup;
  placeObj!:any;
  maxBid!:number;
  thumbnail!:any;
  public constructor(private myService:BidsService,private route:ActivatedRoute,private router:Router,private toastService: ToastService){
    
  }
  ngOnInit(): void {
    let bidId=this.route.snapshot.params["id"]
    this.myService.GetBidById(bidId).subscribe({
      next:(res:any)=>{
        console.log(res)
        if(res.success){
          this.populate(res)
          console.log(res.data)
        }
      },
      error:(err)=>{  
        this.router.navigateByUrl(`404-NotFound`)
        console.log(err)
      }
    })
    
  }

  public populate(res:any){
    this.placeObj=res.data.appartment
    if(this.placeObj.bids.length>0){
      this.maxBid=res.data.appartment.bids[0].amountMoney
    }else{
      this.maxBid=res.data.appartment.startBid
    }
    this.thumbnail=res.data.appartment.images[0]
    this.form=new FormGroup({
      bid: new FormControl(this.maxBid,Validators.min(this.maxBid+1)),
    })
  }
  
  public changeImage(event:any){
    this.thumbnail=event.target.src
  }
  get bid(){
    return this.form.get("bid");
  }

  onSubmit(){
    this.bid?.markAsDirty()
    if(!this.form.valid || !localStorage.getItem("X-Auth-Token")){
      this.toastService.activateToast(
        "you need to login first.",
        false
      );
      return
    }
    // toDo add form submit logic here
    let data={
      amountMoney:this.bid!.value,
      apartmentID:this.placeObj._id,
      userToken:localStorage.getItem("X-Auth-Token")
    }
    console.log(data)
    this.myService.addNewBid(data).subscribe(
      {
        next:(res:any)=>{
          if(res.success){
            this.populate(res)
            console.log(res.data)
          }
          },
          error:(err)=>{  
            console.log(err)
          }
        }
    );
    console.log("form submitted",this.form.valid)

  }
}
