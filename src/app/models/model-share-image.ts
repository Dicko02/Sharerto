import { clickType } from './click-type.type';
export class ModelShareImage{
    
    location?: string;
    //id!: number;

    constructor(
        public id: number,
        public title: string,
        public description: string,
        public create_date: Date,
        public like: number,
        public imageUrl: string){
            //this.id = crypto.randomUUID().substring(0, 8);
        }

        RemoveLike(){
            this.like--;
        }

        AddLike(){
            this.like++;
        }

        setlocation(location:string){
            this.location = location;
        }

        withlocation(location: string): ModelShareImage{
            this.setlocation(location);
            return this;
        }

        click(clickType: clickType){
            if (clickType === 'click') {
                this.AddLike();
            } else if (clickType === 'unclick') {
                this.RemoveLike();
            }
        }
}