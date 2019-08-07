import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // Output decorator is used to other components can listen in on the event
  // EventEmitter is void because no payload is being sent with it
  @Output() sidenavToggle = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

}
