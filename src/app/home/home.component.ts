import { Component, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

@Input() home = false;
  constructor(
    private renderer:Renderer2
  ) { }

  

  ngOnInit(): void {
   
  }

}
