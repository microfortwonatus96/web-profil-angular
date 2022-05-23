import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ActivationEnd, NavigationEnd, Router,} from '@angular/router';
import { LangList, LangService } from '../service/lang.service';
declare var $: any;

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  newsHeader:any = {
    highlight: 'HIGHLIGHTS',
    date: '00 October 2021',
    title: 'This is Highlight News Title Lorem Ipsum Dolor Sit Amet',
    hastag: '#Technology #Finance #hashtag3 #hashtag4',
    slide: ''
  }
  // slider1 = true;
  // slider2 = false;
  newsUpdate = false;
  newsSlider = false;
  
  constructor(
    private router: Router,
    public langService: LangService,
    private activatedRoute: ActivatedRoute
  ) { 
//  this.loadNews()
  }

  ngOnInit(): void {
    $('html, body').animate(
      {
        scrollTop: 0,
      },
      'slow'
    );

  // this.loadNews()
  let news  = document.getElementById('nav');
  news?.classList.remove('nav')
  news?.classList.add('sticky-news')
  }
  loadNews(){
    
  

    let scrol = document.querySelector('.menu-news');
    scrol?.addEventListener('click', function () {
    let header = document.getElementById('nav');
    let icon = document.querySelector('.icon-header-css');
    let toggle = document.querySelector('.icon-crumb');
   
    header?.classList.add('sticky-news');
    header?.classList.remove('sticky');
    header?.classList.remove('nav');
    
    icon?.classList.add('logo2');
    // icon?.classList.remove('logo1');
    
    toggle?.classList.add('toggle-black');
    toggle?.classList.remove('icon-toggle'); 
    }
    );
  }
}
