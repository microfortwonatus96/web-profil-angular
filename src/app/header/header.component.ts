import {
  AfterViewInit,
  Component,
  OnInit,
  HostListener,
  Inject,
  Input,
  Output,
} from '@angular/core';
import {
  ActivatedRoute,
  ActivationEnd,
  NavigationEnd,
  Router,
} from '@angular/router';
import { LangList, LangService } from '../service/lang.service';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, AfterViewInit {
  next: number = 1;
  @Input() careertext: any;
  @Input() abouttext: any;
  @Input() newstext: any;

  slider1 = true;
  slider2 = false;

  constructor(
    private router: Router,
    public langService: LangService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngAfterViewInit(): void {}
  ngOnInit(): void {
    //  this.loadHeader()
    let openSideNav = document.querySelector('.test');
    openSideNav?.addEventListener('click', function () {
      let sideNav = document.querySelector('.sidebar-nav');
      sideNav?.classList.add('show-nav');
      sideNav?.classList.remove('hide-nav');
    });

    // action news
  }
  newsMenu() {
    let nav = document.querySelector('#nav');
    nav?.classList.add('sticky-news');
    nav?.classList.remove('nav');

    let icon = document.querySelector('.icon-header-css');
    (<HTMLElement>icon).classList.add('logo2');
    (<HTMLElement>icon).classList.remove('logo1');

    let toggle = document.querySelector('.icon-crumb');
    (<HTMLElement>toggle).classList.add('toggle-black');
    (<HTMLElement>toggle).classList.remove('icon-toggle');
    let sideNav = document.querySelector('.sidebar-nav');
    sideNav?.classList.remove('show-nav');
    sideNav?.classList.add('hide-nav');
  }
  openMenu() {
    let sideNav = document.querySelector('.sidebar-nav');
    sideNav?.classList.add('show-nav');
    sideNav?.classList.remove('hide-nav');
  }
  closeSideNav() {
    let sideNav = document.querySelector('.sidebar-nav');
    let sideNav2 = document.querySelector('.sidenav2');
    setTimeout(() => {
      sideNav2?.classList.add('hide-nav');
      sideNav2?.classList.remove('show-nav');
      sideNav?.classList.add('hide-nav');
      sideNav?.classList.remove('show-nav');
    }, 100);
  }
  loadHeader() {
    let scrol = document.querySelector('.mat-typography');
    let header = document.querySelector('#nav');
    let icon = document.querySelector('.icon-header-css');
    let news = document.querySelector('.sticky-news');

    if (news) return;
    (<HTMLElement>scrol).addEventListener(
      'scroll',
      function () {
        let toggle = document.querySelector('.icon-crumb');
        let menu = document.querySelector('.menu');
        const scrolled = (<HTMLElement>scrol).scrollTop;
        if (scrolled > 710) {
          (<HTMLElement>header).classList.remove('nav');
          (<HTMLElement>header).classList.add('sticky');

          (<HTMLElement>icon).classList.add('logo2');
          (<HTMLElement>icon).classList.remove('logo1');

          (<HTMLElement>toggle).classList.add('toggle-black');
          (<HTMLElement>toggle).classList.remove('icon-toggle');
        } else {
          (<HTMLElement>header).classList.add('nav');
          (<HTMLElement>header).classList.remove('sticky');

          (<HTMLElement>icon).classList.remove('logo2');
          (<HTMLElement>icon).classList.add('logo1');

          (<HTMLElement>toggle).classList.remove('toggle-black');
          (<HTMLElement>toggle).classList.add('icon-toggle');
        }
      },
      false
    );
  }

  show() {
    let c = document.querySelector('.header2');
    if (this.next > 1) {
      this.next--;
      c?.classList.remove('show');
      c?.classList.add('hide');
    } else {
      this.next++;
      c?.classList.add('show');
      c?.classList.remove('hide');
    }
  }
  showSideNav() {
    let sideNav = document.querySelector('.sidebar-nav');
    let sideNav2 = document.querySelector('.sidenav2');
    sideNav?.classList.add('hide-nav');
    sideNav2?.classList.add('show-nav');
    sideNav2?.classList.remove('hide-nav');
  }

  click1() {
    let sld1 = document.querySelector('.display-block');
    let slider1 = document.querySelector('.paralax-section1');
    let slider2 = document.querySelector('.paralax-section2');

    if (sld1) {
      slider2?.classList.remove('display-block');
      slider2?.classList.add('display-none');
      slider1?.classList.add('display-block');
    } else {
      slider2?.classList.add('display-none');
      slider1?.classList.add('display-block');
    }
  }
  click2() {
    let slider1 = document.querySelector('.paralax-section1');
    let slider2 = document.querySelector('.paralax-section2');
    let sld2 = document.querySelector('.display-block');

    if (sld2) {
      slider1?.classList.remove('display-block');
      slider1?.classList.add('display-none');
      slider2?.classList.add('display-block');
    } else {
      slider1?.classList.add('display-none');
      slider2?.classList.add('display-block');
    }
  }
}
