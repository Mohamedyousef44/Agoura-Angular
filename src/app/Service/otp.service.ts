import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OtpService {
  private apiUrl = 'http://localhost:3000/api/verify-otp';

  constructor(private http: HttpClient) {}

  verifyOTP(otp: string) {
    return this.http.post(this.apiUrl, { otp });
  }
}
