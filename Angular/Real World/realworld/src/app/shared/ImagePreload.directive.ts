import {Directive, Input, HostBinding} from '@angular/core';

@Directive({
  selector: 'img[default]',
  host: {
    '(error)': 'updateUrl()',
    '(load)': 'load()',
    '[src]': 'src'
  }
})

export class ImagePreloadDirective {
  @Input() src: string;
  @Input() default: string;
  @Input() wantedClass: string;
  @HostBinding('class') className;

  updateUrl() {
    this.src = this.default;
  }
  load() {
    if (this.wantedClass) {
      this.className = this.wantedClass;
    } else {
      this.className = 'user-img';
    }
  }
}
