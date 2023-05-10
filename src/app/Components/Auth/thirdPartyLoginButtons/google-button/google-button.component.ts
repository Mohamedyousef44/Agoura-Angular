import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CredentialResponse } from 'google-one-tap';
import { AuthService } from 'src/app/Service/auth.service';

@Component({
  selector: 'app-google-button',
  templateUrl: './google-button.component.html',
  styleUrls: ['./google-button.component.css']
})
export class GoogleButtonComponent implements OnInit{

  clientId="368777379420-2u8ltpji9p81k9cfako1nnnvaufjcu1j.apps.googleusercontent.com"
  constructor(private authService: AuthService, private router:Router) { }


    ngOnInit(): void {

        this.initialzeButton()
    }

    initialzeButton(){
      // @ts-ignore
      google.accounts.id.initialize({
        client_id: this.clientId,
        callback: this.handleCredentialResponse.bind(this),
        auto_select: false,
        cancel_on_tap_outside: true
      });
      // @ts-ignore
      google.accounts.id.renderButton(
      // @ts-ignore
      document.getElementById("g_id_onload"),
        { theme: "outline", size: "large", width: "600", locale:"en",text:"continue_with",logo_alignment:"center"} 
      );
      // @ts-ignore
      google.accounts.id.prompt((notification: PromptMomentNotification) => {});
    }

    async handleCredentialResponse(credential: CredentialResponse) {
      await this.authService.LoginWithGoogle(credential).subscribe(
        {
          next:(res:any)=>{
          if(res){
            localStorage.setItem("X-Auth-Token",res.headers.get("X-Auth-Token"))
          }
          console.log(res.headers.get("X-Auth-Token"))

        },
        error:(err)=>{
          console.log(err)
        }
      });
      
      
  }

  



}
