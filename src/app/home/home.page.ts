import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  user: any = {}
  resp: any;
  userToken: any;
  imageSrc: any  = "assets/imgs/pp.jpg"
  userName: string = '';
  userLocation: string= '';
  constructor(private api: ApiService, public router: Router) { }

  ngOnInit() {
    this.userToken = localStorage.getItem('userToken');
    this.getUserProfile();
  }
  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.DataUrl
    });

    var imageUrl = image.dataUrl;
  
    // Can be set to the src of an image now
    this.imageSrc = imageUrl;
  };

  getUserProfile() {
    this.api.getUserProfile().subscribe(
      (response: any) => {
        this.userName = response.data.name;
        this.userLocation = response.data.address;
        console.log('User Profile:', response);
        console.log('User name:', this.userName);
      },
      (error: any) => {
        console.error('Error fetching user profile:', error);
      }
    );
  }
}
