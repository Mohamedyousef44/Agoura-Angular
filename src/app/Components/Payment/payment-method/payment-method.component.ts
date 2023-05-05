import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styles: [
  ]
})
export class PaymentMethodComponent {
  public customerPaymentInfo : any = {} ;
  public validationForm = new FormGroup({
    name: new FormControl(null,[Validators.required,  Validators.pattern('^[a-zA-Z ]*$'), Validators.maxLength(32) , Validators.minLength(20)]),
    cardNumber : new FormControl(null,[Validators.required , Validators.minLength(16)]),
    expiryDate: new FormControl(null, [Validators.required, Validators.pattern('^(0[1-9]|1[0-2])\/([0-9]{4}|[0-9]{2})$') , Validators.minLength(5) ] ),
    cvv : new FormControl(null , [Validators.required, Validators.minLength(3)])
  });

  validate(){
    if (this.validationForm.valid){      
      this.customerPaymentInfo["name"] = this.validationForm.controls["name"].value;
      this.customerPaymentInfo["cardNumber"] = this.validationForm.controls["cardNumber"].value;
      this.customerPaymentInfo["expiryDate"] = this.validationForm.controls["expiryDate"].value;
      this.customerPaymentInfo["cvv"] = this.validationForm.controls["cvv"].value;
    }
  }
  get name () {
    return this.validationForm.controls["name"].valid;
  }
  get cardNumber () {
    return this.validationForm.controls["cardNumber"].valid;
  }
  get expiryDate () {
    return this.validationForm.controls["expiryDate"].valid;
  }  
  get cvv () {
    return this.validationForm.controls["cvv"].valid
  }
  isNameDirty(){
    return this.validationForm.controls["name"].dirty;
  }
  isCardNumberDirty(){
    return this.validationForm.controls["cardNumber"].dirty;
  }
  isCVVDirty() {
    return this.validationForm.controls["cvv"].dirty;
  }

  isExpiryDateDirty(){
    return this.validationForm.controls["expiryDate"].dirty;
  } 
}
