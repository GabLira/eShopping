import {buildListTPL} from "./components/templates/mobile-list.js";
import {PrinterManager} from "./components/templates/manager.js";
import {lateralMenu} from "./components/lateral-menu.js";

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
    addEventListener('load', getProducts);
    /*
    const container = document.querySelector('.container');
    let products = [];
    const printer = new PrinterManager();
    // window.products = new Products();

    printer.print('.container', buildListTPL(Array.from(products.items.values())));

    async function loadItems() {
        return (await axios('./json/database.json')).json()
    }

    container.addEventListener('DOMContentLoaded', async () => {
        try {
            products = await loadItems();
        } catch (e) {
            console.log('Error!');
            console.log(e);
        }
        console.log(22, products);
    });
    const build = element => {
        const button = element.querySelector('.product__item');
    };

    const get
*/
}
window.addEventListener("DOMContentLoaded", execute);