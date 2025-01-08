import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Route, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.page.html',
  styleUrls: ['./rental.page.scss'],
})
export class RentalPage implements OnInit {
  rental: any[] = [];
  rentalData = {
    user_id: '',
    motor_id: '',
    pickup_branch_id: '',
    return_branch_id: '',
    start_date: '',
    end_date: '',
    start_time: '',
    end_time: '',
    duration: '',        
    total_cost: '',        
    status: '', 
  };
  branches: any[] = [];
  motors: any[] = [];

  constructor(public api: ApiService, public router:Router, private navCtrl: NavController) { }

  ngOnInit() {
    this.loadBranches();
    this.loadMotors();
  }


  async loadBranches() {
    try {
      const response: any = await this.api.getBranches().toPromise();
      this.branches = response;
    } catch (error) {
      console.error('Error fetching branches:', error);
    }
  }

  async loadMotors() {
    try {
      const response: any = await this.api.getMotor().toPromise();
      console.log('Motors response:', response); // Debug response
      this.motors = response;
    } catch (error) {
      console.error('Error fetching motors:', error);
    }
  }
  
  createRental() {
    // Pastikan profile sudah diambil dulu
    this.api.getUserProfile().subscribe((profile: any) => {
      console.log('User Profile:', profile);  
      console.log('User Profile ID:', profile.data.id);
      console.log('Branches:', this.branches);
      console.log('Motors:', this.motors);
      
      this.rentalData.user_id = profile.data.id; 

      this.rentalData.pickup_branch_id = this.branches.find(
        branch => branch.branch_name.toLowerCase().trim() === this.rentalData.pickup_branch_id.toLowerCase().trim()
      )?.branch_id || '';
  
      this.rentalData.return_branch_id = this.branches.find(
        branch => branch.branch_name.toLowerCase().trim() === this.rentalData.return_branch_id.toLowerCase().trim()
      )?.branch_id || '';

      console.log('Rental Data:', this.rentalData);  // Pastikan user_id sudah ada di rentalData
  
      // Setelah set user_id, baru panggil createRental
      this.api.createRental(this.rentalData).subscribe(
        (response: any) => {
          console.log('Rental created:', response);
          this.getRentals();

          const transactionData = {
            rental_id: response.id,
            user_id: this.rentalData.user_id,
            payment_method: 'e-wallet', // Default method, bisa diubah
            amount: this.rentalData.total_cost,
          };

          // Buat transaksi
          this.api.createTransaction(transactionData).subscribe(
            (transactionResponse: any) => {
              console.log('Transaction created:', transactionResponse);
              this.router.navigateByUrl(`/summary/${transactionData.rental_id}`);
             
            },
            (error: any) => {
              console.error('Error creating transaction:', error);
            }
          );
          // console.log('Transaction created:', transactionData);
          // this.router.navigateByUrl(`/summary/${transactionData.rental_id}`)
        },
        (error: any) => {
          console.error('Error creating rental:', error);
          console.log('Error details:', error.error);
        }
      );
    });
  }

  getRentals() {
    this.api.getUserRentals().subscribe(
      (response: any) => {
        this.rental = response;
      },
      (error: any) => {
        console.error('Error fetching rentals:', error);
      }
    );
  }
}
