import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  userIsConnected: boolean;

  constructor() {
    this.userIsConnected = sessionStorage.getItem('isAuthenticated') === 'true';
  }

  ngOnInit(): void {
    sessionStorage.removeItem('gameLoaded');
  }

  disconnect() {
    sessionStorage.clear();
    location.reload();
  }
}
