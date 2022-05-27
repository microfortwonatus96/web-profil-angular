import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ActivationEnd,
  NavigationEnd,
  Router,
} from '@angular/router';
import { LangList, LangService } from '../service/lang.service';
declare var $: any;

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  newsHeader: any = {
    highlight: 'HIGHLIGHTS',
    date: '00 October 2021',
    title: 'This is Highlight News Title Lorem Ipsum Dolor Sit Amet',
    hastag: '#Technology #Finance #hashtag3 #hashtag4',
    slide: '',
  };

  newsUpdate = false;
  newsSlider = false;
  newsPage: boolean = true;

  constructor(
    private router: Router,
    public langService: LangService,
    private activatedRoute: ActivatedRoute
  ) {
    // this.loadNews();
  }

  ngOnInit(): void {
    $('html, body').animate(
      {
        scrollTop: 0,
      },
      'slow'
    );

    // this.loadNews();
    setTimeout(() => {
      localStorage.setItem('news', true.toString());
      let news = document.querySelector('#nav');
      news?.classList.remove('nav');
      news?.classList.add('sticky-news');
      let icon = document.querySelector('.icon-header-css');
      (<HTMLElement>icon).classList.add('logo2');
      (<HTMLElement>icon).classList.remove('logo1');
      let toggle = document.querySelector('.icon-crumb');
      (<HTMLElement>toggle).classList.add('toggle-black');
      (<HTMLElement>toggle).classList.remove('icon-toggle');
      // let section1 = document.querySelector('#home');
      // section1?.classList.add('hide-nav');
    }, 100);
  }

  loadNews() {
    let scrol = document.querySelector('.menu-news');
    scrol?.addEventListener('click', function () {
      // set section header
      let section1 = document.querySelector('#home');
      section1?.classList.add('hide-nav');
      let header = document.getElementById('nav');
      let icon = document.querySelector('.icon-header-css');
      let toggle = document.querySelector('.icon-crumb');
      header?.classList.add('sticky-news');
      header?.classList.remove('sticky');
      header?.classList.remove('nav');

      icon?.classList.add('logo2');
      icon?.classList.remove('logo1');

      toggle?.classList.add('toggle-black');
      toggle?.classList.remove('icon-toggle');
    });
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
    let headNews = document.querySelector('.paralax-news');

    slider1?.classList.remove('display-block');
    slider1?.classList.add('display-none');
    slider2?.classList.add('display-block');
    headNews?.classList.add('display-none');
    headNews?.classList.remove('display-block');
  }
}
