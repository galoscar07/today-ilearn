import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ApiService} from '../../shared/api.service';

@Component({
  selector: 'app-popular-tags',
  templateUrl: './popular-tags.component.html',
})
export class PopularTagsComponent implements OnInit {
  listPopularTags: string[];
  @Output('sortArticlesByTag') articleByTag = new EventEmitter<string>();
  loading = true;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getAllTags().subscribe(
      (response: any) => {
        this.listPopularTags = response.tags;
        this.loading = false;
      }
    );
  }

  articlesByTag(tag: string) {
    this.articleByTag.emit(tag);
  }
}
