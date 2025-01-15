import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  data:any = {email:'', password:''}
  resp:any
  errorMessage: string = ''
  constructor(public api: ApiService, public router:Router) { }

  ngOnInit() {
  }
  
  doLogin(){
    console.log(this.data)
    this.api.post('login', this.data).subscribe((resp)=>{
      console.log("login", resp)
      this.resp = resp

      if(this.resp.success){
        console.log("Token before saving:", this.resp.token); //
        localStorage.setItem('userToken', this.resp.token)
        this.router.navigateByUrl("/home")
      }
      else{
        this.errorMessage = this.resp.message;
      }
    },
    (error) => {
      console.error('Error during login request', error)
      this.errorMessage = 'An error occured. Please try again'
    }
    )
  }
}
