import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, ElementRef, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewChecked {
  public title = 'forex-book';
  public videoId = 'NMjJe9t1QWY';
  public videoWidth = 640;
  public isVideoFinished: boolean = false;
  public dimension: any;
  public target: string | undefined;

  constructor(private route: ActivatedRoute) {}

  @ViewChild('forexBody', { static: true }) forexBody: ElementRef | undefined;

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        if (params.v) this.target = params.v;
        if (this.target == 'fkrfomrsgx') this.videoId = 'fkrfomrsgx';
      }
    );
  }

  ngAfterViewChecked(): void {
    this.dimension = this.forexBody!.nativeElement.getBoundingClientRect();
    
    if (this.dimension.width < 500) {
      this.videoWidth = this.dimension.width - 16;
    }
  }

  public handleVideoFinished(event: boolean) {
    this.isVideoFinished = event;
  }

  public openBuyLink() {
    window.open('https://www.instagram.com/guuh_gomes03/');
  }
}
