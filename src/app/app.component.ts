import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, ElementRef, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterContentInit {
  title = 'forex-book';
  videoId = 'OB-mSJsO0T0'
  videoWidth = 640;
  public isVideoFinished: boolean = false;
  public dimension: any;

  @ViewChild('forexBody', { static: true }) forexBody: ElementRef | undefined;

  ngAfterContentInit(): void {
    this.dimension = this.forexBody!.nativeElement.getBoundingClientRect();
    
    if (this.dimension.width < 500) {
      this.videoWidth = this.dimension.width - 16;
    }
  }

  public handleVideoFinished(event: boolean) {
    this.isVideoFinished = event;
  }
}
