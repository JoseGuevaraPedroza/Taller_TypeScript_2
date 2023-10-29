export class Serie{
    id:number;
    name:string;
    channel:string;
    seasons:number;
    description:string;
    webPage:string;
    imageUrl:string;

    constructor(
        id:number,
        name:string,
        channel:string,
        seasons:number,
        description:string,
        webPage:string,
        imageUrl:string
    ) {
      
        this.id=id;
        this.name=name;
        this.channel=channel;
        this.seasons=seasons;
        this.description=description;
        this.webPage=webPage;
        this.imageUrl=imageUrl;
    }
}