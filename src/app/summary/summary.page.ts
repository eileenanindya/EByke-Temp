import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Capacitor } from '@capacitor/core';
import { CapacitorBarcodeScanner } from '@capacitor/barcode-scanner';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.page.html',
  styleUrls: ['./summary.page.scss'],
})
export class SummaryPage implements OnInit {
  transactionId: string | null = null;
  transaction: any = null;
  branches: any[] = [];
  motors:any[] = [];

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.transactionId = this.route.snapshot.paramMap.get('transactionId');
    console.log('Transaction ID:', this.transactionId);
    if (this.transactionId) {
      this.loadTransactionDetails(this.transactionId);
    }
    this.loadBranches();
    this.loadMotors();
  }
  

  async loadTransactionDetails(transactionId: string) {
    console.log('Transaction:', this.transaction);
    this.api.getTransactionById(transactionId).subscribe(
      (response: any) => {
        console.log('Transaction data:', response); // Debug data
        this.transaction = response; // Simpan data ke variabel
        console.log('Pickup Branch ID:', this.transaction.rental.pickup_branch_id);
        console.log('Motor ID:', this.transaction.rental.motor_id);
      },
      (error: any) => {
        console.error('Error fetching transaction:', error);
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

  loadMotors() {
    this.api.getMotor().subscribe(
      (response: any) => {
        this.motors = response;
      },
      (error: any) => {
        console.error('Error fetching motors:', error);
      }
    );
  }

  getBranchName(branchId: number): string {
    const branch = this.branches.find(b => b.branch_id === branchId);
    return branch ? branch.branch_name : 'Branch Not Found'; // Return default text if not found
  }
  
  getMotorModel(motorId: number): string {
    const motor = this.motors.find(m => m.id === motorId);
    return motor ? motor.model : 'Model Not Found';
  }

  goToPayment() {
    this.navCtrl.navigateForward(`/payment/${this.transaction.id}`);
  }

  async startScan(val?: number){
    try{
      const result = CapacitorBarcodeScanner.scanBarcode({
        hint: val || 17,
        cameraDirection: 1
      });
      console.log(result);
      return (await result).ScanResult
    }catch(e){
      throw(e);
    }
  }
}   
