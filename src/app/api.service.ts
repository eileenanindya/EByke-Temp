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
    const token = localStorage.getItem('userToken') || '';  
    return this.http.post(this.baseUrl+url,data,
      { headers: new HttpHeaders({'Authorization': 'Bearer ' + this.token})}
    )
  }

  get(url:any){
    const token = localStorage.getItem('userToken') || '';
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

  getBranches() {
    return this.get('branches'); // Pastikan URL-nya sesuai dengan endpoint di backend
  }

  getMotor() {
    return this.get('motors'); // Pastikan URL-nya sesuai dengan endpoint di backend
  }

  // *** Rental Management ***

  // Buat rental baru
  createRental(data: any) {
    return this.post('rental', data);
  }

  // Ambil daftar rental user
  getUserRentals() {
    return this.get('rental');
  }

  // createTransaction(data: any) {
  //   return this.post('transactions', data);
  // }

  // getTransactionById(transactionId: string) {
  //   return this.http.get(`/api/transactions/${transactionId}`);
  // }

  // Create a new transaction
  createTransaction(transactionData: any){
    return this.post('transaction', transactionData);
  }

  // Get transaction details
  getTransactionById(transactionId: string){
    return this.get(`transaction/${transactionId}`);
  }
  
  updatePaymentStatus(transactionId: string, status: string) {
    return this.http.put(`/api/transaction/${transactionId}/payment-status`, { payment_status: status });
  }
}
