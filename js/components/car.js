import {buildCarTPL} from "./templates/build-car.js";
import {buildListTPL} from "./templates/mobile-list.js";

export class Product {
    static car = [];
    static containerCar = document.querySelector('.container__car');

    #id;
    get id() {
        return this.#id;
    };

   #image;
    get image() {
       return this.#image;
    };

   #name;
    get name() {
        return this.#name;
    };

   #price;
    get price(){
       return this.#price;
    };
    constructor(data) {
        this.#image = data.image;
        this.#name = data.name;
        this.#price = data.price;
    };

    static showItems = (JSON) => {
        JSON.forEach(data => {
            const productLoaded = buildCarTPL(data.image, data.name, data.price)
            Product.containerCar.innerHTML = productLoaded;
            console.log('Hola funcione')
        });
    };
}