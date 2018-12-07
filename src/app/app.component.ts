import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rhinoAngular';
  menuSelected:string;
  onMenuChange(menuSelected: string){
   this.menuSelected = menuSelected;

  }
}
