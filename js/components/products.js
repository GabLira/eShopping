import {database} from "./database.js";
import {Product} from "./pproduct.js";

export class Products {

    #items = new Map();
    get items() {
        return this.#items;
    }
    constructor() {
        this.start();
    }
    start() {
        database.forEach(item => {
            const product = new Product(item);
            this.items.set(product.id, product);
        });
    }
}