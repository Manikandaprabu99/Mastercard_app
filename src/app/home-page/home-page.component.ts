import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { AuthService } from '../services/auth.services';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private service: AuthService, private route:Router) { }
  Detailslist:any=[];
  MasterList:any=[];
  rl:any=[];
  result=true;
  ngOnInit(): void {
    console.log(this.route.url)
  }
  validate(){
    this.service.deleteuser().subscribe(res=>{
    });
    this.service.getcards().subscribe(data=>{
      this.Detailslist=data;
      this.Detailslist.forEach((obj: any) => {
        if((String(obj.CreditCardNumber).startsWith('5')))
        { 
          this.service.addcards(obj).subscribe(res=>{
            });
  const str=obj.DueDate;
  const ddate=new Date(str);
  const tdate=new Date();
  const diff=tdate.getTime()-ddate.getTime();
  const ndays=(Math.round(diff/(1000*3600*24)));
  //console.log(ndays);
  var charges=ndays*((0.005)*(obj.Amount));
  //console.log(obj.CustomerName+"-"+obj.Amount);
  //console.log(charges)
  var dueamount=obj.Amount+charges;
  var val2={CreditCardNumber:obj.CreditCardNumber,
    Amount:obj.Amount,
    Charges:charges,
    DueAmount:dueamount,
    Status:"Bill Payment Due"
    };
    this.service.updatecard(val2).subscribe(res=>{
    });
    }
    });
  });
  }
}
