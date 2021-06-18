import { Component} from '@angular/core';
import menuItems from '../data/menu.json';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent {

  public menuItemList:{name:string, iconFile:string, dataFile:string}[] = menuItems.menuItems;
  constructor() { }
}
