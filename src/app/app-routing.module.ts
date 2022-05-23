import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CareerDetailComponent } from './career-detail/career-detail.component';
import { CareerComponent } from './career/career.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HeaderClickComponent } from './header-click/header-click.component';
import { NewsComponent } from './news/news.component';
import { WebProfilCssComponent } from './web-profil-css/web-profil-css.component';

const routes: Routes = [
  { path: '', component: WebProfilCssComponent },
  { path: 'news', component: NewsComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'career', component: CareerComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'header-click', component: HeaderClickComponent },
  { path: 'career-detail', component: CareerDetailComponent },
  { path: '**', component: WebProfilCssComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
