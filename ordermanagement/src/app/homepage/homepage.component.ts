import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  stocks=[
      {  stockId:"stockId1", stockDesc:"Indium1", price:10 },
      {  stockId:"stockId2", stockDesc:"Nifty50", price:20 },
      {  stockId:"stockId3", stockDesc:"Nifty100", price:30 },
      {  stockId:"stockId4", stockDesc:"Indium2", price:40 }
    ];
  userStocks=[
          {  userId:"indium", stockId:"stockId1", stockDesc:"Indium1", price:10 },
          {  userId:"indium1", stockId:"stockId2", stockDesc:"Nifty50", price:20 },
          {  userId:"indium2",  stockId:"stockId3", stockDesc:"Nifty100", price:30 },
          {  userId:"indium",  stockId:"stockId4", stockDesc:"Indium2", price:40 }
    ];
constructor(private router: ActivatedRoute) {

  }
  ngOnit()
  {

    }

}
