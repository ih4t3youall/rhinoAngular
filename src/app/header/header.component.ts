import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  @Output() menuSelected = new EventEmitter<string>();

  ngOnInit() {
  }
  onSelect(menuItem:string){
this.menuSelected.emit(menuItem);

  }

}
