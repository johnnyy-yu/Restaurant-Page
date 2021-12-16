import {menuList} from "./menu";
import {locationPage}  from "./location";

export function homepage () {
    const content = document.querySelector("#content");

    (function navBar () {
        const navContainer = document.createElement("div");
        navContainer.id = "navBar";
        content.appendChild(navContainer);
    })();

    (function home () {
        const nav = document.querySelector("#navBar");
        const home =document.createElement("div");
        home.id = "homepage";
        home.textContent = "HOME";
        home.onclick = () => {
            clear();
            homepage().heading();
        }
        nav.appendChild(home);
    })();

    (function menu () {
        const nav = document.querySelector("#navBar");
        const menu = document.createElement("div");
        menu.id = "menu";
        menu.textContent = "MENU";
        menu.onclick = () => {
            clear();
            homepage();
            menuList();
        }
        nav.appendChild(menu);
    })();

    (function locations () {
        const nav = document.querySelector("#navBar");
        const location = document.createElement("div");
        location.id = "locations";
        location.textContent = "LOCATION";
        location.onclick = () => {
            clear();
            homepage();
            locationPage();
        }
        nav.appendChild(location);
    })();

    const heading = () => {
        const headingContainer = document.createElement("div");
        headingContainer.className = "header-container";
        content.appendChild(headingContainer);

        const hContainer = document.querySelector(".header-container");
        const header = document.createElement("div");
        header.id = "artisan";
        header.textContent = "Artisan Korean\nFried Chicken\n\nIt's very good!";
        hContainer.appendChild(header);
    };

    return {
        heading,
    }
}

function clear () {
    const clear = document.getElementById("content");
    clear.textContent = "";
}