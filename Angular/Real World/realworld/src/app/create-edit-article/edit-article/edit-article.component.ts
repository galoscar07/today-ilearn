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
      (error1 => {
      })
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
      })
    );
  }

  onEnterPressed(tag: string) {
    const control = new FormControl(tag, [Validators.required]);
    (this.articleUpdateForm.get('tagList') as FormArray).push(control);
  }

  deleteTag(tagControl: any, i: any) {
    (this.articleUpdateForm.get('tagList') as FormArray).removeAt(i);
  }
}
