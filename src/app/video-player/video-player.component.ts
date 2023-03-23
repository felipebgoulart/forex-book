import { Component, Input, OnInit, Output, EventEmitter, ViewChild, AfterContentInit, ElementRef } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {

  private apiLoaded = false;

  public playerVars = {
    autoplay: 1,
    autohide: 1,
    iv_load_policy: 3,
    cc_load_policy: 0,
    enablejsapi: 1,
    mute: 1,
    controls: 0,
    fs: 0,
    modestbranding: 0,
    disablekb: 1,
    rel: 0,
    showinfo: 0
  }

  @ViewChild('youtubePlayer', { static: true }) youtubePlayer: YouTubePlayer | undefined;

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

    setTimeout(() => {
      this.youtubePlayer?.unMute();
    }, 1000);
  }

  public onStateChange(event: any) {
    if (event.data == 0) {
      this.onVideoFinish.emit(true);
    }
  }

}
