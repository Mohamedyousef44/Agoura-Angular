import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Environment} from "../../Environment/env"

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {
  private apiUrl = Environment.apiUrl+'/api'; // Update the base URL

  constructor(private http: HttpClient) {}

  resetPassword(resetToken: string, newPassword: string) {
    return this.http.post(`${this.apiUrl}/resetPassword`, { resetToken, newPassword });
  }
}
