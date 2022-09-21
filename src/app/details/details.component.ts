import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.services';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private service:AuthService) { }
  @Input() new:any;
  Detailslist:any=[];
  ngOnInit(): void {
    this.service.getcardbyid(this.new).subscribe(data=>{
      this.Detailslist=data;
      console.log(this.Detailslist)
    });
  }

}
