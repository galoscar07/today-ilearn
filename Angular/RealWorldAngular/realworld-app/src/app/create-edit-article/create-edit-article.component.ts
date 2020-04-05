import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {forEach} from '@angular/router/src/utils/collection';
import {AuthService} from '../auth/auth.service';
import {ApiService} from '../shared/api.service';

@Component({
  selector: 'app-create-edit-article',
  templateUrl: './create-edit-article.component.html',
  styleUrls: ['./create-edit-article.component.css']
})
export class CreateEditArticleComponent implements OnInit {

  articleForm: FormGroup;

  constructor() {
  }

  ngOnInit() {
  }

}
