import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-career-detail',
  templateUrl: './career-detail.component.html',
  styleUrls: ['./career-detail.component.scss']
})
export class CareerDetailComponent implements OnInit {

  constructor() {
    this.loadHeader()
   }

  ngOnInit(): void {
    $('html, body').animate(
      {
        scrollTop: 0,
      },
      'slow'
    );
    this.loadHeader()
  }

  loadHeader() {
    let scrol = document.querySelector('.mat-typography');
      scrol?.addEventListener(
        'scroll',
        function () {
          let header = document.getElementById('nav');
          let icon = document.querySelector('.icon-header-css');
          const scrolled = scrol?.scrollTop;
          let toggle = document.querySelector('.icon-crumb');
          if (scrolled != undefined && scrolled > 710) {
            header?.classList.remove('nav');
            header?.classList.add('sticky');
            icon?.classList.add('logo2');
            icon?.classList.remove('logo1');
            toggle?.classList.add('toggle-black');
            toggle?.classList.remove('icon-toggle'); 
          } else {
            header?.classList.add('nav');
            header?.classList.remove('sticky');
            icon?.classList.remove('logo2');
            icon?.classList.add('logo1');
            toggle?.classList.remove('toggle-black');
            toggle?.classList.add('icon-toggle'); 
          }
        },
        false
      );
  }

}
