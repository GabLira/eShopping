export const buildCarTPL = item => {
    try {
        const badge = '$';
        return `<ul class="container__list--car">
            <li class="list__items">
                <img src=${item.image} alt=${item.title} title=${item.title}
                 class="list__items--image">
                <header class="list__items--name">${item.name}</header>
                <p class="list__items--price"><span class="items__price--custom">Price:</span> ${item.price}${badge}</p>
                <div class="error__message"></div>
            </li>
        </ul>`;
    } catch (e) {
        console.log(e)
    }
}