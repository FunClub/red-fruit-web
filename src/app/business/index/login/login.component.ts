import { Component, OnInit } from '@angular/core';
import {animate, keyframes, style, transition, trigger} from '@angular/animations';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Reg} from '../../../core/data/app.data';
import {LoginService} from '../../../core/service/login.service';
import {ToastsManager} from 'ng2-toastr';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {SharedService} from '../../../core/service/shared.service';
import {HomeService} from '../../../core/service/home.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('animation', [
      transition('void => *', [
        animate("300ms",keyframes([
          style({opacity: 0}),
          style({opacity: 0.5}),
          style({opacity: 1})
        ]))
      ])
    ])
  ]
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private service:LoginService,
              private toasts:ToastsManager,private sharedService:SharedService,
              private homeService:HomeService,
              private router:Router
              ) {
    sharedService.indexTitle = '欢迎登录';
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      "mobile":['13996652857',[Validators.required,Validators.pattern(Reg.MOBILE)],[]],
      "password":['a123456',[Validators.required,Validators.pattern(Reg.PASSWORD)],[]]
    })
  }
  login(){
    if(this.loginForm.invalid){
      this.toasts.error("账号或密码错误!");
    }else{
      this.service.login(this.loginForm.value).subscribe(res=>{
        if(!res.data){
          this.toasts.error("账号或密码错误!");
        }else{
          this.router.navigate(["home/center","962192004292009986"],);
        }
      })
    }

  }

}
