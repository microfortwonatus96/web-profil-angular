import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ActivationEnd,
  NavigationEnd,
  Router,
} from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit, AfterViewInit{
  aboutHeader:any = {
    title: 'ABOUT US',
    desc: 'Lorem Ipsum Dolor Sit Amet'
  }

  @Input() about = false;
  constructor(
    private router: Router,
  ) { 
    this.loadNavSticky();
  }
ngAfterViewInit(){
  $('html, body').animate(
    {
      scrollTop: 0,
    },
    'slow'
  );
  this.loadNavSticky()
}
  ngOnInit(): void {
 
    this.loadNavSticky();
  }
  loadNavSticky(){
    let scrol = document.querySelector('.mat-typography');
    // let news = document.querySelector('#nav');
    // news?.classList.remove('sticky-news');
    (<HTMLElement>scrol).addEventListener(
      'scroll',
      function () {
        console.log('about')
        const scrolled = Math.floor((<HTMLElement>scrol).scrollTop);
        let header = document.querySelector('#nav');
        let icon = document.querySelector('.icon-header-css');
        let tabs = document.querySelector('#tabsNav');
        let toggle = document.querySelector('.icon-crumb');
        if (scrolled > 710) {
          if (!header || !icon || !tabs) return;
          (<HTMLElement>header).classList.add('sticky');
          (<HTMLElement>header).classList.remove('nav');
          (<HTMLElement>icon).classList.add('logo2');
          (<HTMLElement>icon).classList.remove('logo1');
          (<HTMLElement>tabs).classList.add('tab1');
          toggle?.classList.add('toggle-black');
          toggle?.classList.remove('icon-toggle'); 
        } else {
          if (!header || !icon || !tabs) return;
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
