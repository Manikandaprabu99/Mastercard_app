import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.services';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:AuthService,private router:Router) { }

  Userlist:any=[];
  cn:any;
  mn:any;
  ge:any;
  gp:any;
  k:any;
  k1=true;
  id:any;
  ngOnInit(): void {
  
  }

  registerForm = new FormGroup({
    CreditCardNumber: new FormControl("",[
      Validators.required,  
    ]),
    MobileNumber: new FormControl("",[
      Validators.required
    ])
  });

  registerSubmited(){
    this.ge=this.registerForm.value.CreditCardNumber;
    this.gp=this.registerForm.value.MobileNumber;
    console.log(this.ge);
    console.log(this.gp);
    this.service.getcardbyid(this.ge).subscribe(data=>{
      this.Userlist=data;
      alert("login successfull");
      console.log(this.Userlist);
     
      for(let m of this.Userlist)
      {
        this.cn=m.CreditCardNumber;
        this.mn=m.MobileNumber;
        this.k=m;
        
      }
      if((this.ge==this.cn)&&(this.mn==this.gp)&&(this.cn!=null)&&(this.ge!=null))
      {
        this.id=this.cn;
        this.k1=true;

        this.router.navigate(['/card',this.id]);
        
      }
      else{
        alert("May Not Be a Credit Card User or Incorrect Details")
      }
    });
    
  }
  get useremail(): FormControl{
    return this.registerForm.get('CreditCardNumber') as FormControl;
  }
  get password(): FormControl{
    return this.registerForm.get('MobileNumber') as FormControl;
  }
 


}
