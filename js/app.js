import {buildListTPL} from "./components/templates/mobile-list.js";
import {buildCarTPL} from "./components/templates/build-car.js";
import {Product} from "./components/car.js";

const execute = async () => {
    const container = document.querySelector('.container');
    const carProducts = document.querySelector('.container__list--car');
    const containerCar = document.querySelector('.container__car');
    const localStorage = window.localStorage;
    let outputCar = '';
    let total = 0;
    let car = [];

    const getProducts = async () => {
        try {
            let result = await axios('./json/database.json');
            container.innerHTML += buildListTPL(result.data);
        } catch (e) {
            container.innerHTML = 'La API fallo';
        }
    };
   await getProducts(getProducts);

    const shoppingCar = ({item: image, name, price}) => {

        let carItems = new Product(image, name, price);
        carItems.Product.showItems();

        console.log('FUNCIONO')
    };

    const button = document.querySelectorAll('.list__items--btn');
    Array.from(button).forEach(element => element.addEventListener('click', shoppingCar));


    //Loader
    /*
window.addEventListener('load', () => {
    document.querySelector('.loader').classList.toggle('loader');
})
*/
}
window.addEventListener("DOMContentLoaded", execute);