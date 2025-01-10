import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';
import { ApiService } from '../api.service';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { Result } from '@zxing/library';
import { BarcodeFormat } from '@zxing/library';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit, AfterViewInit {
  formats: BarcodeFormat[] = [
    BarcodeFormat.QR_CODE,
    BarcodeFormat.EAN_13,
    BarcodeFormat.CODE_128,
    BarcodeFormat.DATA_MATRIX,
  ];

  @ViewChild('scanner') scanner!: ZXingScannerComponent;

  hasDevices!: boolean;
  hasPermission!: boolean;
  qrResultString!: string;
  qrResult!: Result;

  availableDevices!: MediaDeviceInfo[];
  currentDevice!: MediaDeviceInfo;

  transactionId!: number;

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    // private navCtrl: NavController
  ) {}

  // Implementasi OnInit
  ngOnInit(): void {
    console.log('PaymentPage initialized');

    const transactionId = this.route.snapshot.paramMap.get('transactionId')
    if (transactionId) {
      this.transactionId = +transactionId;
      console.log('Transaction ID:', this.transactionId);
  
      // Lakukan sesuatu dengan transactionId
    } else {
      console.error('Transaction ID is missing.');
      // Redirect atau tampilkan pesan error jika diperlukan
    }
  }

  // Implementasi AfterViewInit
  ngAfterViewInit(): void {
    if (!this.scanner) {
      console.error('ZXingScannerComponent is not initialized.');
      return;
    }

    this.scanner.camerasFound.subscribe((devices: MediaDeviceInfo[]) => {
      this.hasDevices = true;
      this.availableDevices = devices;

      for (const device of devices) {
        if (/back|rear|environment/gi.test(device.label)) {
          this.currentDevice = device;
          this.scanner.device = this.currentDevice; // Set device
          break;
        }
      }
    });

    this.scanner.camerasNotFound.subscribe(() => {
      console.error('No cameras found.');
      this.hasDevices = false;
    });

    this.scanner.scanComplete.subscribe((result: Result) => {
      console.debug('Scan complete:', result);
      this.qrResult = result;
    });

    this.scanner.permissionResponse.subscribe((perm: boolean) => {
      console.debug('Permission response:', perm);
      this.hasPermission = perm;
    });
  }

  handleQrCodeResult(resultString: string) {
    console.log('Result: ', resultString);
    console.log('Transaction ID: ', this.transactionId);
    this.qrResultString = resultString;
    
    this.api.updatePaymentStatus(this.transactionId).subscribe(
      (response) => {
        console.log('Payment status updated: ', response);

        window.location.href = '/payment-success';
      }, (error) => {
        console.error('Failed to update payment status: ', error)
      }
    )
  }

  onDeviceSelectChange(event: Event): void {
    const selectedValue = (event.target as HTMLSelectElement).value;
    console.debug('Selection changed: ', selectedValue);
    this.currentDevice = this.availableDevices.find(
      (device) => device.deviceId === selectedValue
    )!;
    this.scanner.device = this.currentDevice; // Set device
  }
}
