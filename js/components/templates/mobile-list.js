export const buildListTPL = electronics => {
    try {
        const output = electronics.reduce((previous, item) => {
            return `${previous}
        <li class="list__items">
            <button class="list__items--btn" data-id="${item.id}">
                <span class="hover__underline"> Shop now </span>
                <svg id="arrow-horizontal" xmlns="http://www.w3.org/2000/svg" width="30" height="10" viewBox="0 0 46 16">
                    <path id="Path_10" data-name="Path 10" 
                    d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" transform="translate(30)">
                    </path>
                </svg>
            </button>
            <img src=${item.image} alt=${item.title} title=${item.title}
             class="list__items--image">
            <header class="list__items--name">${item.name}</header>
            <p class="list__items--price"><span class="items__price--custom">Price:</span> ${item.price}$</p>
            <div class="error__message"></div>
        </li>
        `
        });
        return `<ul class="container__list">${output}<ul/>`
    }catch (e) {
        console.log(e)
    }

};