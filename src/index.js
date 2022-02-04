import homepage from "./homepage.js";
import navBar from "./navBar.js";
import "./style.css";

(function home () {
    const content = document.getElementById("content");

    (function navBar () {
        const navContainer = document.createElement("nav");
        content.appendChild(navContainer);
    })();

    (function main () {
        const main = document.createElement("main");
        content.appendChild(main);
    })();

    navBar();
    homepage();
})();

