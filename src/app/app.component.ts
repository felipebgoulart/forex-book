import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, ElementRef, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewChecked {
  title = 'forex-book';
  videoId = 'OB-mSJsO0T0'
  videoWidth = 640;
  public isVideoFinished: boolean = false;
  public dimension: any;

  constructor(private renderer: Renderer2,private elem: ElementRef) {}

  @ViewChild('forexBody', { static: true }) forexBody: ElementRef | undefined;

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
