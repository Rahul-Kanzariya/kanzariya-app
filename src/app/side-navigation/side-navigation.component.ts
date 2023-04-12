import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent implements OnInit {
  isOpenSideBar :boolean = true;
  selectedMenu : any;
  menuList = [
    {title : "Dashboard", route : '/dashboard'},
    // {title : "About Me", route : '/"aboutMe"'}
    
  ];
  constructor() { }

  ngOnInit(): void {
  }

  openNav() {
    this.isOpenSideBar = !this.isOpenSideBar;
  }
  
  closeNav() {
    this.isOpenSideBar = !this.isOpenSideBar;
  }

  handleMenu(menu:any){
    console.log('menu: handleMenu >>> ', menu);
    this.selectedMenu = menu;
  }
}
