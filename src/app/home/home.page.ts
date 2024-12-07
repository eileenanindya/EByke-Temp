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
  constructor(private api: ApiService, public router: Router) { }

  ngOnInit() {
    this.userToken = localStorage.getItem('userToken')
  }
  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.DataUrl
    });
  
    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    var imageUrl = image.dataUrl;
  
    // Can be set to the src of an image now
    this.imageSrc = imageUrl;
  };


}
