import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from './icons/icon-subset';
import { ToastService } from './Service/toast-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Agoura';
  toastMessage!: string;
  toastVisible=false;
  toastSuccess!:boolean;
  constructor(
    private router: Router,
    private titleService: Title,
    private iconSetService: IconSetService,
    private toastService: ToastService
  ) {
    titleService.setTitle(this.title);
    // iconSet singleton
    iconSetService.icons = { ...iconSubset };
  }

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
    });
    this.toastService.toastEvent.subscribe((data:any) => {
        data=JSON.parse(data)
        this.toastMessage = data.message;
        this.toastSuccess=data.success;
        console.log(this.toastMessage)
        this.show()
      });
    
  }
  show(){
    if(this.toastMessage.length==0){
      return
    }
    this.toastVisible=true
      setTimeout(()=>{
        this.toastVisible=false
        this.toastMessage=""
      },4000)
    }
  
  
}



