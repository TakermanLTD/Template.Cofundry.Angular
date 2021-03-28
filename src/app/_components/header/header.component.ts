import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/_services/CartService.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  constructor(private cartService: CartService) { }

  public items: any;

  ngOnInit() {
    this.cartService.getAll().subscribe(data => {
      this.items = data;
    });
  }

  getTotal() {
    let result = 0;

    if (this.items && this.items.length > 0) {
      this.items.forEach(item => {
        result += item.price;
      });
    }

    return result;
  }

}
