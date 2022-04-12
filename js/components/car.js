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



/*
    static message(message, color = '#53a8c7') {
        const container = document.querySelector('.container');
        const msg = document.querySelector('.message');

        const containerMessage =
            `<div class="container__message">
                <div class="message"></div>
            </div>`;

        container.innerHTML += containerMessage
        containerMessage.style.background = color;
        //Aca va la animacion
    };


    static products() {
        return this.#products;
    };

    static total() {
        return this.#products.reduce(((acc, itemB) => {
            acc * (item.price * item.units)
        }), 0);
    };
        static delete() {
             if (this.#containerCar.has(this.#carProducts)) {
                 this.#car.remove();
             }
        }

        static total() {
            const items = Array.from(this.#items.values());
            return items.reduce((acc, item) => acc + (item.data.price + item.data.quantity));
        }
        static clear() {
            this.#items = new Map;
        }
    */



