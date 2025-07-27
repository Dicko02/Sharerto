import { Injectable } from "@angular/core";
import { ModelShareImage } from "../models/model-share-image";
import { clickType } from "../models/click-type.type"

Injectable({
    providedIn: 'root'
})

export class ShareImagesService{
    modelshareimages: ModelShareImage[]=[

        new ModelShareImage(
        1,
        'Alastor',
        'One of the most powerfull overlord and the great master manipuletor in hell',
        new Date(),
        236,
        'https://images8.alphacoders.com/107/1079337.png'
        ),

        new ModelShareImage(
        2,
        'Vox',
        'A powerfull overlord and big Alastor enemy',
        new Date(),
        71,
        'https://images.alphacoders.com/124/1246006.jpg'
        ).withlocation("In the VVV headquarters"),

        new ModelShareImage(
        3,
        'Lucifer Morningstar',
        'Fallen angel and king of hell',
        new Date(),
        155,
        'https://images8.alphacoders.com/135/1356763.jpeg'
        ).withlocation("In Pentagram City at the Seventh Circle of Hell"),

        new ModelShareImage(
            4,
            'Husk',
            'Fallen overlord having sold his soul to Alastor',
            new Date(),
            43,
            'https://images.alphacoders.com/130/1306462.png'
        ).withlocation("Charlie hotel Or Hazbin Hotel"),

        new ModelShareImage(
            5,
            'Asmodeus',
            'The depiction of the lust of the seven deadly sins and boss of a huge adult company',
            new Date(),
            98,
            'https://images4.alphacoders.com/126/1261761.jpg'
        ).withlocation("In the club or restaurant of the circle of lust")

    ];

    getmodelshareimages(): ModelShareImage[]{
        return [...this.modelshareimages];
    }


    getSharertoById(SharertoId: number): ModelShareImage{
        const foundshareimage = this.modelshareimages.find(title => title.id == SharertoId);
        
        
        if(!foundshareimage){
            throw new Error('sharerto not found!');
        }
        
        return foundshareimage;
    }


    clickSharertoById(SharertoId: number, clickType: clickType): void {
        const shareimage = this.getSharertoById(SharertoId);
        shareimage.click(clickType);
    }

}

