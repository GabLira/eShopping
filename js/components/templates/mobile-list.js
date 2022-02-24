export const buildListTPL = electronics => {
    try {
        const output = electronics.reduce((previous, item) => {
            return `${previous}
        <li class="list__items">
            <button class="list__items--btn" data-id="${item.id}">Add to cart</button>
            <img src=${item.image} alt=${item.title} title=${item.title}
             class="list__items--image">
            <header class="list__items--name">${item.name}</header>
            <p class="list__items--price">Price: ${item.price}</p>
            <div class="error__message"></div>
        </li>
        `
        });
        return `<ul class="container__list">${output}<ul/>`
    }catch (e) {
        console.log(e)
    }

};