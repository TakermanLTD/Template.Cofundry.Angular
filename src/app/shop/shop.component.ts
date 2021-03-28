import { Component, OnInit } from '@angular/core';
import { DatesService } from '../_services/Dates.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  data: any;
  dates: any;

  constructor(private datesService: DatesService) { }

  ngOnInit(): void {
    this.datesService
      .getAll()
      .subscribe((result: any) => {
        this.data = result.data;
        this.dates = result.data.items;
      });
  }

}
