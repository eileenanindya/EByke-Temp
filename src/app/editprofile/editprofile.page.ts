import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.page.html',
  styleUrls: ['./editprofile.page.scss'],
})
export class EditprofilePage implements OnInit {
  data:any = {
    name: '',
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
        console.log('Response:', response);
        if (response.success) {
          this.data = response.data;
        }
      },
      (error) => {
        console.error('Error fetching profile:', error);
      }
    );
  }

  saveProfile() {
    this.api.updateUserProfile(this.data).subscribe(
      (response: any) => {
        console.log('Response:', response); // Debug response
        if (response.success) {
          alert('Profile updated successfully!');
          this.router.navigateByUrl("/profile");
        } else {
          alert('Failed to update profile.');
        }
      },
      (error) => {
        console.error('Error updating profile:', error);
      }
    );
  }
}
