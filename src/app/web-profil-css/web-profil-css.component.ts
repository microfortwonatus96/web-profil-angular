import { AfterViewInit, Component, HostListener, Inject, OnInit, Renderer2 } from '@angular/core';
import {
  ActivatedRoute,
  Router,
} from '@angular/router';
// import { LangList, LangService } from '../service/lang.service';
// import { TranslateService } from '@ngx-translate/core';
import { LoadingService } from '../service/loading.service';

declare var $: any;

@Component({
  selector: 'app-web-profil-css',
  templateUrl: './web-profil-css.component.html',
  styleUrls: ['./web-profil-css.component.scss'],
})
export class WebProfilCssComponent implements OnInit,AfterViewInit {

  homePage = false;
  aboutUsPage = false;
  careerPage = false;
  newsPage = false;
  contactUsPage = false;
  public sections:number = 5

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private loadingService: LoadingService
  ) {
    this.loadNavSticky()
  }
  
  ngAfterViewInit(): void {
  }
  ngOnInit(): void {
    $('html, body').animate(
      {
        scrollTop: 0,
      },
      'slow'
    );
      this.loadNavSticky()
      let news  = document.querySelector('#nav');
      news?.classList.remove('sticky-news');
      news?.classList.add('nav');
  }
  loadNavSticky(){
    let scrol =  document.querySelector('.mat-typography');  
   (<HTMLElement>scrol).addEventListener('scroll', function() {
    const scrolled = Math.round((<HTMLElement>scrol).scrollTop);
    let header = document.querySelector('#nav');
    let icon = document.querySelector('.icon-header-css');
   
    let toggle = document.querySelector('.checkbtn');
    let news  = document.querySelector('.sticky-news');
     if(scrolled >= 615){
      if(!header || !icon || !toggle)return
      (<HTMLElement>header).classList.remove('nav');
      (<HTMLElement>header).classList.add('sticky');    
      (<HTMLElement>icon).classList.add('logo2');
      (<HTMLElement>icon).classList.remove('logo1');
      (<HTMLElement>toggle).classList.add('toggle-black');
      (<HTMLElement>toggle).classList.remove('icon-toggle');
     }else{
      (<HTMLElement>header).classList.remove('sticky');
      (<HTMLElement>header).classList.add('nav');
      (<HTMLElement>icon).classList.remove('logo2');
      (<HTMLElement>icon).classList.add('logo1');
      (<HTMLElement>toggle).classList.remove('toggle-black');
      (<HTMLElement>toggle).classList.add('icon-toggle');
     }
    }, false);
  }
}

