import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ArticleComponent } from './article/article.component';
import { PopularTagsComponent } from './homepage/popular-tags/popular-tags.component';
import {ApiService} from './shared/api.service';
import {HttpClientModule} from '@angular/common/http';
import { GlobalFeedComponent } from './homepage/global-feed/global-feed.component';
import {ArticleService} from './shared/article.service';
import { FilterFeedComponent } from './homepage/filter-feed/filter-feed.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    ArticleComponent,
    PopularTagsComponent,
    GlobalFeedComponent,
    FilterFeedComponent,
    SignUpComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ApiService, ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
