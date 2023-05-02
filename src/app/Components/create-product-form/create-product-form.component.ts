import { Component } from '@angular/core';
import { FormControl, FormGroup , Validators ,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-create-product-form',
  templateUrl: './create-product-form.component.html',
  styleUrls: ['./create-product-form.component.css']
})
export class CreateProductFormComponent {

  validationForm:FormGroup;
  step:number;
  public constructor(private fb:FormBuilder){
    this.step=1;
    this.validationForm = fb.group({
      title: new FormControl(null,[Validators.required, Validators.minLength(5)]),
      address: fb.group({
        country:new FormControl(null,[Validators.required, Validators.minLength(5)]),
        city:new FormControl(null,[Validators.required, Validators.minLength(5)]),
        street:new FormControl(null,[Validators.required, Validators.minLength(5)]),
        zipcode:new FormControl(null,[Validators.required,Validators.pattern("^[0-9]{5,9}$")]),
      }),

      agreeToTerms:new FormControl(null,[Validators.required]),
    });
  }
  get title () {
    return this.validationForm.controls["title"];
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
  get zipcode () {
    return this.validationForm.controls["address"].get("zipcode");
  }

  send(){
    if(this.validationForm.valid){
      console.log(this.validationForm.value)
      console.log("created success")
    }
  }
  get firstPageValid(){
    return this.title.valid && this.country?.valid && this.city?.valid && this.street?.valid && this.zipcode?.valid
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
