import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  data:any = {
    name: '',
    email: '',
    phonenum: '',
    address: '',
  };

  response:any

  constructor(public api: ApiService, public router:Router) { }

  ngOnInit() {
    this.loadProfile();
  }

  loadProfile() {
    this.api.get('profile').subscribe(
      (response: any) => {
        console.log('Response:', response); // Debug response
        if (response.success) {
          this.data = response.data; // Ambil data dari respons
        }
      },
      (error) => {
        console.error('Error fetching profile:', error);
      }
    );
  }
}
