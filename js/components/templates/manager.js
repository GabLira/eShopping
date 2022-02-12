export class PrinterManager {

    print(selector, tpl, data) {

        console.log(typeof tpl);

        if (typeof tpl !== 'function') {
            console.warn('El parametro tpl debe ser una funcion');
            return;
        }

        const container = document.querySelector(selector);
        if (!container) {
            return console.warn(`El selector "${selector}" pasado no existe en el DOM`);
        }
        container.innerHTML = tpl(data);
    }
}