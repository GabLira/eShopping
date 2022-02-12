import {buildListTPL} from "./components/templates/mobile-list.js";
import {PrinterManager} from "./components/templates/manager.js";
import {Products} from "./components/products.js";
import {lateralMenu} from "./components/lateral-menu.js";

const execute = () => {
//Variables
    const container = document.querySelector('.container');
    const printer = new PrinterManager();
    window.products = new Products();

    printer.print('.container', buildListTPL(Array.from(products.items.values())));

    const build = element => {
        const button = element.querySelector('.product__item');
    }

}
window.addEventListener("DOMContentLoaded", execute);