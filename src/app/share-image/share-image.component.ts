import { Component, Input, OnInit } from '@angular/core';
import { ModelShareImage } from '../models/model-share-image';
import { TitleCasePipe } from '@angular/common';
import { Router } from '@angular/router'

@Component({
  selector: 'app-share-image',
  standalone: true,
  imports: [
    TitleCasePipe
  ],
  templateUrl: './share-image.component.html',
  styleUrl: './share-image.component.scss'
})
export class ShareImageComponent {

  @Input() modelshareimage!: ModelShareImage;

  constructor(private router: Router){}


  onViewSharerto() {
    this.router.navigateByUrl(`Sharerto/${this.modelshareimage.id}`);
  }
}

