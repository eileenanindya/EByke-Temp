import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-set-up-profile',
  templateUrl: './set-up-profile.page.html',
  styleUrls: ['./set-up-profile.page.scss'],
})
export class SetUpProfilePage implements OnInit {
  data:any = {name: '',phonenum: '', address: ''};
  resp:any;

  constructor(public api:ApiService, public router:Router) { }

  ngOnInit() {
    // this.getUserProfile();
    this.loadUserProfile();
  }

  completeProfile() {
    console.log(this.data);
  this.api.post('profile/complete', this.data)
    .subscribe((resp) => { // Menyatakan resp sebagai any
      console.log("Profile setup", resp);
      this.resp = resp;

      if (this.resp.success) {
        // this.api.post('profile/update-name', { name: this.data.name })
        //   .subscribe(() => {
        //     console.log("Name synced with user table");
        //     this.router.navigateByUrl('/home'); // Navigate to home after success
        //   });
        this.router.navigateByUrl('/home'); // Navigasi setelah sukses
      }
    }, error => {
      console.error("Error setting up profile", error);
    });
  }

  loadUserProfile() {
    this.api.get('user/profile') // Ganti dengan endpoint yang sesuai
      .subscribe((resp) => {
        console.log("User profile data", resp);
        this.resp = resp;
        if (this.resp.success) {
          this.data = this.resp.data; // Asumsi data di respons berisi informasi pengguna
        }
      }, error => {
        console.error("Error fetching user profile", error);
      });
  }

  // getUserProfile() {
  //   this.api.get('profile').subscribe((resp:any) => {
  //     this.data.name = resp.data.name; // Mengisi input dengan nama dari DB
  //     this.data.phonenum = resp.data.phonenum;
  //     this.data.address = resp.data.address;
  //   }, error => {
  //     console.error("Error fetching profile", error);
  //   });
  // }
}
