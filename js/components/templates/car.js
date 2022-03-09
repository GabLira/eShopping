export const buildCarTPL = productsCar => {
    try {
        const output = productsCar.reduce((previous, item) => {
            return `${previous}
        <li class="list__items">
            <img src=${item.image} alt=${item.title} title=${item.title}
             class="list__items--image">
            <header class="list__items--name">${item.name}</header>
            <p class="list__items--price"><span class="items__price--custom">Price:</span> ${item.price}$</p>
            <div class="error__message"></div>
        </li>
        `;
        }, '');
        return `<ul class="container__list">${output}<ul/>`
    }catch (e) {
        console.log(e)
    }
}