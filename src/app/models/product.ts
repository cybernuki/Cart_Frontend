export class Product {
    id: number;
    name: string;
    sku: string;
    description: string;
    imageUrl: string;
    price: number;

    constructor(id: number, name: string, sku: string, description = "", price = 0, imageUrl = "https://robertoespinosa.es/wp-content/uploads/2019/10/placeholder.png") {
        this.id = id;
        this.name = name;
        this.sku = sku;
        this.description = description;
        this.imageUrl = imageUrl;
        this.price = price;
    }
}
