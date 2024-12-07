import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  data:any = {email: '', password: '', password_confirmation: ''};
  resp:any;
  
  constructor(public api: ApiService, public router:Router) { }

  ngOnInit() {
  }

  doRegister(){
    this.api.post('register', this.data).subscribe((resp)=> {
      console.log("register", resp);
      this.resp = resp;

      if(this.resp.success){
        localStorage.setItem('userToken', this.resp.token);
        this.router.navigateByUrl('/login');
      }
    })
  }
}
