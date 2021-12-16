export class menuItems {
    constructor (item, price, description, pic) {
        this.item = item;
        this.price = price;
        this.description = description;
        this.pic = pic;
    }

    appendMenuItem () {
        const content = document.querySelector("#content")
        const item = document.createElement("div");
        item.className = "food";
        item.id = "container-" + this.item.replace(/ /g,'');
        content.appendChild(item);

        const menuID = "#" + item.id
        const menuContainer = document.querySelector(menuID)

        const foodItem = this.item;
        const priceOfItem = this.price;
        const descriptionOfItem = this.description;
        const picOfItem = this.pic;

        (function appendPic () {
            const img = document.createElement("img");
            img.id = "img-" + foodItem;
            img.src = picOfItem;
            menuContainer.appendChild(img);
        })();

        (function appendItem () {
            const item = document.createElement("div");
            item.id = foodItem;
            item.textContent = foodItem;
            menuContainer.appendChild(item);
        })();

        (function appendPrice () {
            const price = document.createElement("div");
            price.id = "price-" + foodItem;
            price.textContent = priceOfItem;
            menuContainer.appendChild(price);
        })();

        (function appendDescription () {
            const description = document.createElement('div');
            description.id = "description-" + foodItem;
            description.textContent = descriptionOfItem;
            menuContainer.appendChild(description);
        })();
    }
}