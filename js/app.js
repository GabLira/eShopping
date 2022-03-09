import {buildListTPL} from "./components/templates/mobile-list.js";
import {buildCarTPL} from "./components/templates/car.js";
import {PrinterManager} from "./components/templates/manager.js";
import {lateralMenu} from "./components/lateral-menu.js";

const button = document.querySelector('.list__items--btn');

const execute = () => {
//Variables
    const container = document.querySelector('.container');

    const getProducts = async () => {
        try {
            let result = await axios('./json/database.json');
            console.log(52, result)
            container.innerHTML += buildListTPL(result.data);
            console.log(22, 'container: ' + container, 'result' + result.data)
        } catch (e) {
            container.innerHTML = 'La API fallo'
        }
    }
    getProducts(getProducts);

    button.addEventListener('click', element => {
        element.forEach({

        });
    });


}
window.addEventListener("DOMContentLoaded", execute);