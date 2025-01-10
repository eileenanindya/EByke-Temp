import { Component, OnInit, ViewChild } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';
import { Result } from '@zxing/library'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  constructor() {}

  // @ViewChild('scanner')
  // scanner!:ZXingScannerComponent;

  // hasDevices!: boolean;
  // hasPermission!: boolean;
  // qrResultString!: string;
  // qrResult!: Result;

  // availableDevices!: MediaDeviceInfo[];
  // currentDevice!: MediaDeviceInfo;

  ngOnInit(): void {
    initFlowbite();

  //   this.scanner.camerasFound.subscribe((devices:MediaDeviceInfo[]) => {
  //     this.hasDevices = true
  //     this.availableDevices = devices

  //     for(const device of devices){
  //       if(/back|rear|environment/gi.test(device.label)) {
  //         new this.scanner.deviceChange();
  //         this.currentDevice = device;
  //         break;
  //       }
  //     }
  //   })

  //   this.scanner.camerasNotFound.subscribe(() => this.hasDevices = false);
  //   this.scanner.scanComplete.subscribe((result: Result) => this.qrResult = result);
  //   this.scanner.permissionResponse.subscribe((perm: boolean) => this.hasPermission = perm);
  // }

  // displayCameras(cameras: MediaDeviceInfo[]){
  //   console.debug('Devices: ', cameras);
  //   this.availableDevices = cameras;
  // }

  // handleQrCodeResult(resultString: string){
  //   console.debug('Result: ', resultString)
  //   this.qrResultString = resultString;
  // }

  // onDeviceSelectChange(selectedValue: string){
  //   console.debug('Selection changed: ', selectedValue);
  //   this.currentDevice = this.scanner.getDeviceById(selectedValue);
  }
}
