export class Product {
    id?:number;
    name:string;
    desc:string;
    price:number;

    constructor(id:number, name:string, desc:string, price:number){
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.price = price;
    }
}
