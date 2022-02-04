import chicken from "./img/istockphoto-1289486147-612x612.jpeg";

export default function homepage () {
    const main = (() => {
        const container = document.querySelector("main");
        const brand = document.createElement("div");
        brand.className = "brand"
        container.appendChild(brand);

        const logo = document.createElement("img");
        logo.src = chicken;
        logo.className = "restaurant-logo";
        brand.appendChild(logo);

        const name = document.createElement("h1");
        name.className = "restaurant-name";
        name.textContent = "Artisan Korean Fried Chicken";
        brand.appendChild(name);
    })();
}

