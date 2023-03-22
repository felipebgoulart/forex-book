import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {

  private apiLoaded = false;

  public playerVars = {
    autoplay: 1,
    controls: 0,
    fs: 0,
    modestbranding: 0,
    disablekb: 1,
    rel: 0,
    showinfo: 0
  }

  @Input() videoId!: string;
  @Input() videoWidth!: number;
  @Output() onVideoFinish: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
    if(!this.apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
  }

  public onStateChange(event: any) {
    if (event.data == 0) {
      this.onVideoFinish.emit(true);
    }
  }

}
