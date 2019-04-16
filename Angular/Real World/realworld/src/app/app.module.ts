import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PopularTagsComponent } from './homepage/popular-tags/popular-tags.component';
import {ApiService} from './shared/api.service';
import {HttpClientModule} from '@angular/common/http';
import {ArticleService} from './shared/article.service';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthService} from './auth/auth.service';
import {User} from './shared/user.model';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { FavouritedArticlesComponent } from './profile/favourited-articles/favourited-articles.component';
import { CreateEditArticleComponent } from './create-edit-article/create-edit-article.component';
import { UserArticlesComponent } from './profile/user-articles/user-articles.component';
import { ArticleComponent } from './article/article.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import {UserProfileService} from './shared/userprofile.service';
import { EditArticleComponent } from './create-edit-article/edit-article/edit-article.component';
import { CreateArticleComponent } from './create-edit-article/create-article/create-article.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    PopularTagsComponent,
    SignUpComponent,
    SignInComponent,
    ProfileComponent,
    SettingsComponent,
    FavouritedArticlesComponent,
    CreateEditArticleComponent,
    UserArticlesComponent,
    ArticleComponent,
    ArticlesListComponent,
    EditArticleComponent,
    CreateArticleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ApiService, ArticleService, AuthService, User, UserProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
