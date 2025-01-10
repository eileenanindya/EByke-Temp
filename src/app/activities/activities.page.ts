import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.page.html',
  styleUrls: ['./activities.page.scss'],
})
export class ActivitiesPage implements OnInit {
  transactions: any[] = [];
  userId!: number;
  noTransactions: boolean = false;

  constructor(public api: ApiService, public router:Router) { }

  ngOnInit() {
    this.loadUserInfo();
  }

  loadUserInfo() {
    this.api.getUserInfo().subscribe(
      (response: any) => {
        this.userId = response.id;
        console.log('User ID:', this.userId);
        this.loadTransactions();
      },
      (error) => {
        console.error('Error loading user info:', error);
      }
    );
  }

  loadTransactions() {
    if (this.userId) {
      this.api.getUserTransactions(this.userId).subscribe(
        (response: any) => {
          this.transactions = response;
          if (this.transactions.length === 0) {
            this.noTransactions = true; // Menandakan tidak ada transaksi
          }
          console.log('Transactions:', this.transactions);  
        },
        (error) => {
          console.error('Error loading transactions:', error);
        }
      );
    } else {
      console.error('User ID not found.');
    }
  }

  viewTransaction(transactionId: number) {
    this.router.navigate(['/activities-detail', transactionId]); // Navigasi ke halaman detail transaksi
  }
}
