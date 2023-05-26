import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Environment} from "../../Environment/env"

@Injectable({
  providedIn: 'root'
})
export class OtpService {
  private apiUrl = Environment.apiUrl+'/api'; // Update the base URL

  constructor(private http: HttpClient) {}

  verifyOTP(otp: string) {
    return this.http.post<{ resetToken: string }>(`${this.apiUrl}/verifyOTP`, { otp });
  }
}
