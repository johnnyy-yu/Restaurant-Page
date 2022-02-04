export class menuItems {
    constructor (item, price, description, pic) {
        this.item = item;
        this.price = price;
        this.description = description;
        this.pic = pic;
    }

    appendMenuItem () {
        const item = document.createElement("div");
        item.className = "food";
        item.id = "container-" + this.item.replace(/ /g,'');
        document.querySelector(".menu-page").appendChild(item);

        const menuID = "#" + item.id
        const menuContainer = document.querySelector(menuID)

        const foodItem = this.item;
        const priceOfItem = this.price;
        const descriptionOfItem = this.description;
        const picOfItem = this.pic;

        const appendPic = (() => {
            const img = document.createElement("img");
            img.id = "img-" + foodItem;
            img.src = picOfItem;
            menuContainer.appendChild(img);
        })();

        const appendItem = (() => {
            const item = document.createElement("div");
            item.id = foodItem;
            item.textContent = foodItem;
            menuContainer.appendChild(item);
        })();

        const appendPrice = (() => {
            const price = document.createElement("div");
            price.className = "price";
            price.textContent = priceOfItem;
            menuContainer.appendChild(price);
        })();

        const appendDescription = (() => {
            const description = document.createElement('div');
            description.className = "description"
            description.textContent = descriptionOfItem;
            menuContainer.appendChild(description);
        })();
    }
}