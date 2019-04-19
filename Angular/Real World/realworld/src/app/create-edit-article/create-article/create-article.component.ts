import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

import {AuthService} from '../../auth/auth.service';
import {ApiService} from '../../shared/api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {

  articleForm: FormGroup;

  constructor(private authService: AuthService,
              private apiService: ApiService,
              private router: Router) { }

  ngOnInit() {
    this.articleForm = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      body: new FormControl(null, [Validators.required]),
      tagList: new FormArray([]),
    });
  }

  onSubmitCreateArticle() {
    const title = this.articleForm.value.title;
    const body = this.articleForm.value.body;
    const description = this.articleForm.value.description;
    const tagList = this.articleForm.value.tagList;
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
    const tagList = (this.articleForm.get('tagList') as FormArray).value;
    const position = tagList.indexOf(tag);
    if (position === -1) {
      (this.articleForm.get('tagList') as FormArray).push(control);
    }
  }

  deleteTag(tagControl: any, i: any) {
    (this.articleForm.get('tagList') as FormArray).removeAt(i);
  }

}
