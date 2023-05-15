import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Environment} from '../../Environment/env'


@Injectable({
  providedIn: 'root'
})
export class OtpService {
  private apiUrl = Environment.apiUrl+'/api/verify-otp';

  constructor(private http: HttpClient) {}

  verifyOTP(otp: string) {
    return this.http.post(this.apiUrl, { otp });
  }
}
