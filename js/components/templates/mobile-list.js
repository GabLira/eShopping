export const buildListTPL = products => {
    try {
        const badge = '$';
        const output = products.reduce((previous, item) => {
            return `${previous}
        <li class="product__item list__items">
            <img src=${item.image} alt=${item.title} title=${item.title}
             class="list__items--image">
            <header class="list__items--name">${item.name}</header>
            <p class="list__items--price"><span class="items__price--custom">Price:</span> ${item.price}${badge}</p>
            <button class="list__items--btn" data-id="${item.id}">Shop now</button>
            <div class="error__message"></div>
        </li>
        `;
        }, '');
        return `<ul class="container__list">${output}<ul/>`
    } catch (e) {
        console.log(e)
    }

};