import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor() { }
  public toastEvent: EventEmitter<string> = new EventEmitter<string>();

  activateToast(message: string,success:boolean) {
    let data={message,success}
    this.toastEvent.emit(JSON.stringify(data));
  }
}
