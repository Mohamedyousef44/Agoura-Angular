import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BidsService } from 'src/app/Service/bids.service';

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
  public constructor(private myService:BidsService,private route:ActivatedRoute){
    // this.maxBid=0;
    // this.form=new FormGroup({
    //   bid: new FormControl(this.maxBid,Validators.min(this.maxBid+1)),
    // })
  }
  ngOnInit(): void {
    let bidId=this.route.snapshot.params["id"]
    this.myService.GetBidById(bidId).subscribe(
      {
      next:(res:any)=>{
        // this.populate(data)
        this.placeObj=res.data.appartment
        this.maxBid=res.data.appartment.bids[0].amountMoney
        this.thumbnail=res.data.appartment.images[0]
        this.form=new FormGroup({
          bid: new FormControl(this.maxBid,Validators.min(this.maxBid+1)),
        })
        console.log(res.data.appartment)
        },
        error:(err)=>{  
          console.log(err)
        }
      }
    )
    
  }

  public populate(data:any){
    this.placeObj=data
    this.maxBid=data.bids.amountMoney
    this.thumbnail=data.images[0]
    // this.form=new FormGroup({
    //   bid: new FormControl(this.maxBid,Validators.min(this.maxBid+1)),
    // })
    console.log(data)
  }
  
  public changeImage(event:any){
    this.thumbnail=event.target.src
  }
  get bid(){
    return this.form.get("bid");
  }

  onSubmit(){
    if(!this.form.valid){
      return
    }
    // toDo add form submit logic here
    console.log("form submitted",this.form.valid)

  }
}
