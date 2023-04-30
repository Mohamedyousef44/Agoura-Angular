import { Component } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  // all variables should be replaced when getting answer from api ,currently we are using static data
  thumbnails!:string[];
  thumbnail!:string;
  form!:FormGroup;
  maxBid!:number;
  public constructor(){
    this.thumbnails=["/assets/a6baa5ef-7ee1-4c4e-97fc-dc3f2b34d801.webp",
                      "/assets/8c7c8932-ec0b-4f1a-bdad-fd08efbc7ab4.webp",
                      "/assets/47beaa65-26e2-4405-9104-144141f0cb12.webp",
                      "/assets/278177ca-dfc5-46c4-b417-be0ff5478549.webp",
                      "/assets/bea39e35-a494-45c6-9de4-900a656bb41d.webp"]
    this.thumbnail=this.thumbnails[0]
    this.maxBid=250;

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
    if(!this.form.valid){
      return
    }
    // toDo add form submit logic here
    console.log("form submitted",this.form.valid)

  }
}
