import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ActivationEnd,
  NavigationEnd,
  Router,
} from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss'],
})
export class CareerComponent implements OnInit {
  stateHeader: any = false;
  career: any = {
    title: 'CAREER',
    desc: 'Join Us and Lets Grow Together',
  };

  constructor(private router: Router) {
  }
  ngOnInit(): void {
    $('html, body').animate(
      {
        scrollTop: 0,
      },
      'slow'
    );
    
    this.loadNavSticky();

    let openSideNav = document.querySelector('.test');
    openSideNav?.addEventListener('click', function () {
      let sideNav = document.querySelector('.sidebar-nav');
      sideNav?.classList.add('show-nav');
      sideNav?.classList.remove('hide-nav');
    });
  }
  loadNavSticky() {
    let scrol = document.querySelector('.mat-typography');

    (<HTMLElement>scrol).addEventListener(
      'scroll',
      function () {
        const scrolled = Math.round((<HTMLElement>scrol).scrollTop);

        let header = document.querySelector('#nav');
        console.log(header);
        let icon = document.querySelector('.icon-header-css');
        let tabs = document.querySelector('#tabsNav');
        let toggle = document.querySelector('.icon-crumb');
        let news = document.querySelector('.sticky-news');
        if (scrolled >= 615) {   
          (<HTMLElement>header).classList.remove('nav');
          (<HTMLElement>header).classList.add('sticky');
          (<HTMLElement>icon).classList.add('logo2');
          (<HTMLElement>icon).classList.remove('logo1');
          (<HTMLElement>tabs).classList.add('tab1');
          toggle?.classList.add('toggle-black');
          toggle?.classList.remove('icon-toggle');
        } else {
          (<HTMLElement>header).classList.remove('sticky');
          (<HTMLElement>header).classList.add('nav');
          (<HTMLElement>icon).classList.remove('logo2');
          (<HTMLElement>icon).classList.add('logo1'); 
          (<HTMLElement>tabs).classList.remove('tab1');
          toggle?.classList.remove('toggle-black');
          toggle?.classList.add('icon-toggle');
        }
      },
      false
    );
  }
}
