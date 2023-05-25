import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {
  private apiUrl = 'https://agora-node-server.onrender.com/api'; // Update the base URL

  constructor(private http: HttpClient) {}

  resetPassword(resetToken: string, newPassword: string) {
    return this.http.post(`${this.apiUrl}/resetPassword`, { resetToken, newPassword });
  }
}
