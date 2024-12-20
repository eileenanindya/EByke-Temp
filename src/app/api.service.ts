import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://localhost:8000/api/'
  token: any = ''
  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('userToken') || ''
  }

  post(url:any, data:any){
    // const token = localStorage.getItem('userToken') || '';
    return this.http.post(this.baseUrl+url,data,
      { headers: new HttpHeaders({'Authorization': 'Bearer ' + this.token})}
    )
  }

  get(url:any){
    // const token = localStorage.getItem('userToken') || '';
    return this.http.get(this.baseUrl+url,
      { headers: new HttpHeaders({'Authorization': 'Bearer ' + this.token})}
    )
  }

  // Ambil data profil user
  getUserProfile() {
    return this.get('profile');
  }

  // Update data profil user
  updateUserProfile(data: any) {
    return this.post('profile/update', data);
  }
}
