import { Routes } from '@angular/router';
import { ShareImageListComponent } from './share-image-list/share-image-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleShareImageComponent } from './single-share-image/single-share-image.component';


export const routes: Routes = [
    {path: `Sharerto/:id`, component: SingleShareImageComponent},
    {path: 'Sharerto', component: ShareImageListComponent},
    {path: '', component: LandingPageComponent}
];
