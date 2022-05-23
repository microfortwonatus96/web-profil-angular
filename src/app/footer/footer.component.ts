import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ActivationEnd,
  NavigationEnd,
  Router,
} from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  next: number = 1
  constructor(
    private router: Router,
    // public langService: LangService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }
  show(){
    let c = document.querySelector('.header2');
    if(this.next > 1){
      console.log(this.next);
      this.next--;
      c?.classList.remove('show')
      c?.classList.add('hide')

    }else {
      console.log(this.next);
      this.next++;
      c?.classList.add('show')
      c?.classList.remove('hide')
    }
  }

}
