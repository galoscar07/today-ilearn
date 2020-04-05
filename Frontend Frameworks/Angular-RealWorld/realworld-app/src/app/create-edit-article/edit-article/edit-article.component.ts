import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth/auth.service';

import {ApiService} from '../../shared/api.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {Article} from '../../shared/article.model';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {

  articleUpdateForm: FormGroup;
  article: Article;

  error = {
    title: false,
    description: false,
    body: false,
  };
  errorMessage = {
    title: '',
    description: '',
    body: '',
  };

  constructor(private authService: AuthService,
              private apiService: ApiService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.articleUpdateForm = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      body: new FormControl(null, [Validators.required]),
      tagList: new FormArray([]),
    });
    const articleSlug = this.route.snapshot.paramMap.get('articleSlug');
    this.apiService.getSingleArticleBySlug(articleSlug).subscribe(
      (response: any) => {
        this.article = new Article(response.article);
        for (const elem of this.article.tagList) {
          (this.articleUpdateForm.get('tagList') as FormArray).push(new FormControl(elem, []));
        }
        this.articleUpdateForm.patchValue({
          title: this.article.title,
          description: this.article.description,
          body: (this.article.body) ? this.article.body : ' ',
        });
      },
      (error1 => {})
    );
  }

  onSubmitCreateArticle() {
    const title = this.articleUpdateForm.value.title;
    const body = this.articleUpdateForm.value.body;
    const description = this.articleUpdateForm.value.description;
    const tagList = this.articleUpdateForm.value.tagList;
    this.apiService.postArticles(title, description, body, tagList).subscribe(
      (response: Response) => {
        this.router.navigate(['/']);
      },
      (error1 => {
        this.error.description = false;
        this.error.title = false;
        this.error.body = false;
        if (error1.error.errors.hasOwnProperty('description')) {
          this.error.description = true;
          this.errorMessage.description = error1.error.errors.description;
        }
        if (error1.error.errors.hasOwnProperty('title')) {
          this.error.title = true;
          this.errorMessage.title = error1.error.errors.title;
        }
        if (error1.error.errors.hasOwnProperty('body')) {
          this.error.body = true;
          this.errorMessage.body = error1.error.errors.body;
        }
      })
    );
  }

  onEnterPressed(tag: string) {
    const control = new FormControl(tag, [Validators.required]);
    const tagList = (this.articleUpdateForm.get('tagList') as FormArray).value;
    const position = tagList.indexOf(tag);
    if (position === -1) {
      (this.articleUpdateForm.get('tagList') as FormArray).push(control);
    }
  }

  deleteTag(tagControl: any, i: any) {
    (this.articleUpdateForm.get('tagList') as FormArray).removeAt(i);
  }
}
