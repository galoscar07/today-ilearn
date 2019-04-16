import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {SignInComponent} from './auth/sign-in/sign-in.component';
import {SignUpComponent} from './auth/sign-up/sign-up.component';
import {ProfileComponent} from './profile/profile.component';
import {SettingsComponent} from './settings/settings.component';
import {FavouritedArticlesComponent} from './profile/favourited-articles/favourited-articles.component';
import {CreateEditArticleComponent} from './create-edit-article/create-edit-article.component';
import {UserArticlesComponent} from './profile/user-articles/user-articles.component';
import {ArticleComponent} from './article/article.component';
import {EditArticleComponent} from './create-edit-article/edit-article/edit-article.component';
import {CreateArticleComponent} from './create-edit-article/create-article/create-article.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'login', component: SignInComponent },
  { path: 'register', component: SignUpComponent },
  { path: 'settings', component: SettingsComponent,  },
  { path: 'editor', component: CreateEditArticleComponent, children: [
      { path: '', component: CreateArticleComponent },
      { path: ':articleSlug', component: EditArticleComponent }
    ] },
  { path: ':username', component: ProfileComponent, children: [
      { path: '', component: UserArticlesComponent },
      { path: 'favorites', component: FavouritedArticlesComponent }
      ]},
  { path: 'article/:articleSlug', component: ArticleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
