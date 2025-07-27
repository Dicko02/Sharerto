import { Component, OnInit } from '@angular/core';
import { ModelShareImage } from '../models/model-share-image';
import { DatePipe, NgClass, NgStyle, TitleCasePipe} from '@angular/common';
import { ShareImagesService } from '../services/share-images.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-single-share-image',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    TitleCasePipe,
    DatePipe,
    RouterLink
  ],
  providers: [ShareImagesService],
  templateUrl: './single-share-image.component.html',
  styleUrl: './single-share-image.component.scss'
})
export class SingleShareImageComponent implements OnInit {

  modelshareimage!: ModelShareImage;

  constructor(private ShareImagesService: ShareImagesService,
    private route: ActivatedRoute){}
  
  likeName!: string;
  clickOrNot!: boolean;

  ngOnInit(): void {
      this.prepareInterface();
      this.getSharerto();
  }

  onLike(): void {
    if (this.clickOrNot){
      this.removeLike();
    }else{
      this.addLike();
    }

  }

  addLike(): void {
    this.ShareImagesService.clickSharertoById(this.modelshareimage.id, 'click');
    this.likeName = 'DP -';
    this.clickOrNot= true;
  }

  removeLike(): void {
    this.ShareImagesService.clickSharertoById(this.modelshareimage.id, 'unclick');
    this.likeName = 'DP +';
    this.clickOrNot= false;
  }

  private prepareInterface(): void{
    this.clickOrNot= false;
    this.likeName = 'DP +';
  }

  private getSharerto(): void{
    const SharertoId = this.route.snapshot.params['id'];
    console.log(SharertoId);
    
    this.modelshareimage = this.ShareImagesService.getSharertoById(SharertoId);
  }

}

