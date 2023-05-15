import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Environment} from '../../Environment/env'


@Injectable({
  providedIn: 'root'
})
export class ForgetPasswordService {
  private apiUrl = Environment.apiUrl+'/api/forgot-password';

  constructor(private http: HttpClient) {}

  sendOTP(email: string) {
    return this.http.post(this.apiUrl, { email });
  }
}
