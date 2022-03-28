import {buildCarTPL} from "./templates/build-car";

export class ShoppingCar {

    static #containerCar = document.querySelector('.container__car');
    static #carProducts = document.querySelector('.container__list--car')
    static #car = [];

    static add(item) {
        if (!this.#containerCar.has(this.#carProducts)) {
            const product = buildCarTPL(item)
            const productReady = this.#car.push(product)
            this.#containerCar = productReady;
        }
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

}

