import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, ElementRef, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterContentInit {
  title = 'forex-book';
  videoId = 'Hm5d0DcjFCo'
  videoWidth = 640;
  public isVideoFinished: boolean = false;

  @ViewChild('forexBody', { static: true }) forexBody: ElementRef | undefined;

  ngAfterContentInit(): void {
    let dimension = this.forexBody!.nativeElement.getBoundingClientRect();
    
    if (dimension.width < 500) {
      this.videoWidth = dimension.width - 16;
    }
  }

  public handleVideoFinished(event: boolean) {
    this.isVideoFinished = event;
  }
}
