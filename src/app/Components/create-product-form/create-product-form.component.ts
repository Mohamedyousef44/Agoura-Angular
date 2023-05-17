import { Component, Input, OnChanges  } from '@angular/core';
import { FormControl, FormGroup , Validators ,FormBuilder, FormArray} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BidsService } from 'src/app/Service/bids.service';
import { CreateBidService } from 'src/app/Service/create-bid.service';

@Component({
  selector: 'app-create-product-form',
  templateUrl: './create-product-form.component.html',
  styleUrls: ['./create-product-form.component.css']
})
export class CreateProductFormComponent implements OnChanges{
  @Input("edit") edit=false;
  files!:FileList;
  validationForm!:FormGroup;
  step:number;
  id!:any;
  public constructor(private fb:FormBuilder,private myService:CreateBidService,private myBidService:BidsService,private router:Router,private route:ActivatedRoute){
    this.step=1;
    this.validationForm = fb.group({
      title: new FormControl(null,[Validators.required, Validators.minLength(5)]),
      address: fb.group({
        country:new FormControl(null,[Validators.required, Validators.minLength(5)]),
        city:new FormControl(null,[Validators.required, Validators.minLength(5)]),
        street:new FormControl(null,[Validators.required, Validators.minLength(5)]),
        zipCode:new FormControl(null,[Validators.required,Validators.pattern("^[0-9]{5,9}$")]),
      }),
      features: fb.group({
        bedRooms:new FormControl(null,[Validators.required, Validators.min(1),Validators.pattern("^[0-9]+$")]),
        baths:new FormControl(null,[Validators.required, Validators.min(1),Validators.pattern("^[0-9]+$")]),
        area:new FormControl(null,[Validators.required, Validators.min(1),Validators.pattern("^[0-9]+$")]),
        kitchen:new FormControl(null,[Validators.required, Validators.min(1),Validators.pattern("^[0-9]+$")]),
        guests:new FormControl(null,[Validators.required, Validators.min(1),Validators.pattern("^[0-9]+$")]),
      }),
      aboutPlace: new FormControl(null,[Validators.required, Validators.minLength(100)]),
      startBid: new FormControl(null,[Validators.required,Validators.min(1),Validators.pattern("^[0-9]+$")]),
      duration:new FormControl(null,[Validators.required,Validators.min(7),Validators.max(30),Validators.pattern("^[0-9]+$")]),
      agreeToTerms:new FormControl(null,[Validators.required]),
      images:new FormControl([],[Validators.required,Validators.min(1),])
    });
  }
  ngOnChanges(){
    let bidId=this.route.snapshot.params["id"]
    
    if(this.edit){
      this.myBidService.GetBidById(bidId).subscribe({
        next:(res:any)=>{
          console.log(res)
          if(res.success){
            this.id=res.data.appartment._id
            this.validationForm.patchValue(res.data.appartment);
            // this.validationForm.markAsDirty()
            this.validationForm.controls["images"].removeValidators
        }
      },
        error:(err)=>{
          console.log(err)
        }
      })
    }
  } 
  get title () {
    return this.validationForm.controls["title"];
  }
  get aboutPlace () {
    return this.validationForm.controls["aboutPlace"];
  }
  get duration () {
    return this.validationForm.controls["duration"];
  }
  get startBid () {
    return this.validationForm.controls["startBid"];
  }
  get agreeToTerms () {
    return this.validationForm.controls["agreeToTerms"];
  }
  get country () {
    return this.validationForm.controls["address"].get("country");
  }
  get city () {
    return this.validationForm.controls["address"].get("city");
  }
  get street () {
    return this.validationForm.controls["address"].get("street");
  }
  get zipCode () {
    return this.validationForm.controls["address"].get("zipCode");
  }
  get bedRooms () {
    return this.validationForm.controls["features"].get("bedRooms");
  }
  get baths () {
    return this.validationForm.controls["features"].get("baths");
  }
  get area () {
    return this.validationForm.controls["features"].get("area");
  }
  get kitchen () {
    return this.validationForm.controls["features"].get("kitchen");
  }
  get guests () {
    return this.validationForm.controls["features"].get("guests");
  }
  get images () {
    return this.validationForm.controls["images"] as FormArray;
  }

  onFileSelected(event: any) {
    this.files = event.target.files;
  }

  send(){


    if(this.validationForm.valid && !this.edit){
      let formData=new FormData()
      formData.append("data",JSON.stringify(this.validationForm.value))
      if(this.files){
        for(let i=0;i<this.files.length;i++){
          formData.append(`photo`,this.files[i])
        }
      }
      let bid=this.myService.post(formData).subscribe(
        {
          next:(res:any)=>{
            if(res.success){
              this.router.navigateByUrl(`place/${res.itemId}`)
              console.log(res)
            }
          },
          error:(err)=>{console.log(err)}
        }
      );
      console.log("created success",bid)
    }
    if(this.validationForm.valid && this.edit){
      this.myBidService.updateBidById(this.id,this.validationForm.value).subscribe(
        {
          next:(res:any)=>{
            if(res.success){
              this.router.navigateByUrl(`/home`)
              console.log(res)
            }
          },
          error:(err)=>{console.log(err)}
        }
      );
      console.log("created success")
    }
  }

  get firstPageValid(){
    return this.title.valid && this.country?.valid && this.city?.valid && this.street?.valid && this.zipCode?.valid
  }

  next() {
    console.log(`step ${this.step} form ${this.validationForm.valid}`)
    this.step++;
    }
  prev() {
    console.log(`step ${this.step} form ${this.validationForm.valid}`)
    this.step--;
    }
}
