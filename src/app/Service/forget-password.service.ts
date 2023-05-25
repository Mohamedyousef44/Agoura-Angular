import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForgetPasswordService {
  private apiUrl = 'https://agora-node-server.onrender.com/api';

  constructor(private http: HttpClient) {}

  sendOTP(email: string) {
    return this.http.post(`${this.apiUrl}/sendOTP`, { email });
  }
}
