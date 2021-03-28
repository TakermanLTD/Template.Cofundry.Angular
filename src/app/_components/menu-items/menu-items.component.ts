import { Component, OnInit } from '@angular/core';
import { MenuItemsService } from 'src/app/_services/MenuItems.service';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.css']
})
export class MenuItemsComponent implements OnInit {

  constructor(private menuItemsService: MenuItemsService) { }

  public items: any;

  ngOnInit() {
    this.menuItemsService.getAll().subscribe({
      next: (result: any) => {
        this.items = result.data.sort((a, b) => a.order - b.order);
      },
      error: (err: any) => {
        console.log(err);
      },
      complete: () => {
      }
    });
  }
}
