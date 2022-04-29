import {buildListTPL} from "./components/templates/mobile-list.js";
import {buildCarTPL} from "./components/templates/build-car.js";
import {Product} from "./components/car.js";

const execute = async () => {
    const container = document.querySelector('.container');
    const carProducts = document.querySelector('.container__list--car');
    const containerCar = document.querySelector('.container__car');
    const message = document.querySelector('.error__message');
    const localStorage = window.localStorage;
    let outputCar = '';
    let total = 0;
    let cart = [];
    const link = './json/database.json';

    const getProducts = async () => {
        try {
            let result = await axios('./json/database.json');
            container.innerHTML += buildListTPL(result.data);
        } catch (e) {
            container.innerHTML = 'The API failed';
        }
    };
    await getProducts(getProducts);

    const shoppingCar = ({currentTarget: target}) => {
        const productId = parseInt(target.dataset.id);

        console.log(productId);
        cart.find(item => item.data.id === productId);
        console.log(renderCart)
        renderCart();

        cart.push(productId);
        console.log(cart)
        /*
        const link = '/json/database.json';

        console.log('Carrito: ', cart, 'Propiedades: ', link['image'], link['name'], link.price);
*/
    };
    const renderCart = async () => {
        console.log(containerCar)
        containerCar.innerHTML = '';
        cart.forEach(buildCarTPL);
        try {
            let result = await axios('./json/database.json');
            containerCar.innerHTML += buildCarTPL(result.data);
        } catch (e) {
            container.innerHTML = 'The API failed';
        }
    };

    class Storage {
        static saveProduct(items) {
            localStorage.setItem('products', JSON.stringify(items));
        };

        static saveCart(cart) {
            localStorage.setItem('cart', JSON.stringify(cart));
        };

        static getProducts(id) {
            const product = JSON.parse(localStorage.getItem('products'));
            product.find(item => item.id === parseFloat(id));
        };

        static getCart() {
            return localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
        };
    }

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