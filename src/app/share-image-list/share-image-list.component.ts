import { Component, OnInit } from '@angular/core';
import { ShareImageComponent } from '../share-image/share-image.component';
import { ModelShareImage } from '../models/model-share-image';
import { ShareImagesService } from '../services/share-images.service'

@Component({
  selector: 'app-share-image-list',
  standalone: true,
  imports: [
    ShareImageComponent
  ],
  //providers a permis de regler le probleme des 2 dernier jour; il permet d'injecte notre "ShareImagesService"
  providers: [ShareImagesService],
  templateUrl: './share-image-list.component.html',
  styleUrl: './share-image-list.component.scss'
})

export class ShareImageListComponent implements OnInit{
  
  constructor(private shareImagesService: ShareImagesService){}

  modelshareimages!: ModelShareImage[];

  ngOnInit(): void{
    this.modelshareimages = this.shareImagesService.getmodelshareimages();
  }
}
