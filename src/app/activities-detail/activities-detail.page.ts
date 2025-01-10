import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-activities-detail',
  templateUrl: './activities-detail.page.html',
  styleUrls: ['./activities-detail.page.scss'],
})
export class ActivitiesDetailPage implements OnInit {
  transactionId: string | null = null;;
  transaction: any = {};  
  rentals: any= {};
  user: any = {};     
  userProfile: any = {};
  branches: any[] = [];
  rating: number = 0;    
  isLoading: boolean = false;
  showFinishButton: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private router: Router) { }

  ngOnInit() {
    this.transactionId = this.route.snapshot.paramMap.get('transactionId');
    if (this.transactionId) {
      this.loadTransactionDetail();  // Lanjutkan memuat detail transaksi
    } else {
      console.error('Transaction ID is missing');
      // Kamu bisa redirect atau tampilkan pesan error
    }
    this.loadBranches();
  }

  loadTransactionDetail() {
    if (!this.transactionId) {
      console.error('Transaction ID is not available');
      return;
    }

    this.isLoading = true;
    this.api.getTransactionById(this.transactionId).subscribe(
      (response: any) => {
        console.log('Transaction ID: ', this.transactionId)
        // console.log('API Response:', response);
        this.transaction = response;
        this.rentals = response.rental;
        this.user = response.user; 
        this.userProfile = response.user.profile;
        this.isLoading = false;
        console.log('Transaction: ', this.transaction);
        console.log('Profile: ', this.userProfile);
        console.log('Rentals:', this.rentals);
        console.log('Pickup Branch ID:', this.transaction.rental.pickup_branch_id);
      },
      (error) => {
        console.error('Error loading transaction detail:', error);
        this.isLoading = false;
      }
    );
  }

  checkRentalStatus() {
    // Logika untuk mengecek status rental pertama atau rental tertentu
    if (this.rentals && this.rentals.length > 0 && this.rentals[0].status === 'active') {
      this.showFinishButton = true;
    } else {
      this.showFinishButton = false;
    }
  }

  handleFinishRental(rentalId: number) {
    this.api.updateRentStatus(rentalId).subscribe(
      (response) => {
        console.log('Rental marked as completed:', response);
        
        window.location.href = '/activities';
        // Bisa memberikan feedback ke user atau update UI setelah berhasil
      },
      (error) => {
        console.error('Failed to mark rental as completed:', error);
      }
    );
  }  

  loadBranches() {
    this.api.getBranches().subscribe(
      (response: any) => {
        this.branches = response;
      },
      (error: any) => {
        console.error('Error fetching branches:', error);
      }
    );
  }

  getBranchName(branchId: number): string {
    const branch = this.branches.find(b => b.branch_id === branchId);
    return branch ? branch.branch_name : 'Branch Not Found'; // Return default text if not found
  }
}
