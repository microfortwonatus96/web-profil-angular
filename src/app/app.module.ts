import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WebProfilCssComponent } from './web-profil-css/web-profil-css.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AboutUsComponent } from './about-us/about-us.component';
import { CareerComponent } from './career/career.component';
import { NewsComponent } from './news/news.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderClickComponent } from './header-click/header-click.component';
import { CareerDetailComponent } from './career-detail/career-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    WebProfilCssComponent,
    AboutUsComponent,
    CareerComponent,
    NewsComponent,
    ContactUsComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    HeaderClickComponent,
    CareerDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
