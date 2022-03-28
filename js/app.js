import {buildListTPL} from "./components/templates/mobile-list.js";

const execute = () => {
    const container = document.querySelector('.container');
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
    getProducts(getProducts);
    const button = document.querySelectorAll('.list__items--btn');

    const buttonActive = () => {
        console.log('FUNCIONO')
    }

    console.log(button)
    Array.from(button).forEach(element => element.addEventListener('click', buttonActive));


    //Loader
    /*
window.addEventListener('load', () => {
    document.querySelector('.loader').classList.toggle('loader');
})
*/
}
window.addEventListener("DOMContentLoaded", execute);