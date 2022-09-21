import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.services';

import { HomePageComponent } from '../home-page/home-page.component';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private comp:HomePageComponent,private rtr:Router,private service:AuthService,private route:ActivatedRoute) { }
  id:any;
  amount:any;
  Detailslist:any=[];
  paymentlist:any=[];
  @Input() bd:any;
  @Input() bd1:any;
  BookName:any;
  ngOnInit():void {
    console.log("hi",this.comp.result);
    this.route.paramMap.subscribe((params)=>{
      this.id=params.get('id');
      this.service.getcardbyid(this.id).subscribe(data=>{
        this.Detailslist=data;
        console.log(this.Detailslist)
        this.amount=this.Detailslist.DueAmount;
        console.log(this.amount)
    });

  });
  }
  Paymentdone(){
    
    this.route.paramMap.subscribe((params)=>{
      this.id=params.get('id');
    this.service.getcardbyid(this.id).subscribe(data=>{
      this.paymentlist=data;
      
      this.paymentlist.forEach((obj:any) => {
        console.log("payment",obj.DueAmount);
        if(obj.DueAmount!=0)
        {
          obj.DueAmount-=this.bd;
          var val2={CreditCardNumber:obj.CreditCardNumber,
            Amount:obj.Amount,
            Charges:obj.Charges,
            DueAmount:obj.DueAmount,
            Status:obj.Status
          };
          this.service.updatecard(val2).subscribe(res=>{
            });
        }
      });
      
      
    });
  });
    alert("Payment Done");
  }
  check()
  {
    this.route.paramMap.subscribe((params)=>{
      this.id=params.get('id');
    this.service.getcardbyid(this.id).subscribe(data=>{
      this.paymentlist=data;    
      this.paymentlist.forEach((obj:any) => {
        console.log("payment",obj.DueAmount);
        if(obj.DueAmount!=0)
        {
        alert("Make Payment to Diable Your Credit Card");
      }
      else{
        console.log(this.id);
        var val2={CreditCardNumber:obj.CreditCardNumber,
          Amount:obj.Amount,
          Charges:obj.Charges,
          DueAmount:obj.DueAmount,
          Status:"Bill Cleared and requested to Deactivate"
        };
        this.service.updatecard(val2).subscribe(res=>{
          alert("your Card Status is requested and updated soon");});

        }
        
      
    });
  });
});
  }
  AddAmount()
  {
    this.route.paramMap.subscribe((params)=>{
    this.id=params.get('id');
    this.service.getcardbyid(this.id).subscribe(data=>{
      this.paymentlist=data;
      this.paymentlist.forEach((obj:any) => {     
          //obj.Amount+=this.bd1;
          var val3={CreditCardNumber:obj.CreditCardNumber,
            Amount:obj.Amount,
            Charges:obj.Charges,
            DueAmount:obj.DueAmount,
            Status:"Bill Payment Due-Requested for Extending Limit"+this.bd1
          };
          this.service.updatecard(val3).subscribe(res=>{
            });        
      });
    });
  });
    alert("Amount Adder")
  }
}
