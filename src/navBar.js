import homepage from "./homepage";
import locationPage from "./locationPage";
import menuPage from "./menuPage";

import chicken from "./img/istockphoto-1289486147-612x612.jpeg"
import fb from "./img/logos/f_logo_RGB-Blue_58.png";
import ig from "./img/logos/Instagram_Glyph_Gradient_RGB.png";
import twtr from "./img/logos/2021 Twitter logo - blue.png";
import yt from "./img/logos/yt_icon_rgb.png";
import yp from "./img/logos/yelp_burst.png";

export default function navBar() {
  const nav = document.querySelector("nav");

  const logo = (() => {
    const img = document.createElement("img");
    img.src = chicken;
    img.className = "chicken-logo";
    nav.appendChild(img);
  })();

  const home = (() => {
    const home = document.createElement("div");
    home.id = "homepage";
    home.textContent = "HOME";
    home.onclick = () => {
      clear();
      homepage();
    };
    nav.appendChild(home);
  })();

  const menu = (() => {
    const menu = document.createElement("div");
    menu.id = "menu";
    menu.textContent = "MENU";
    menu.onclick = () => {
      clear();
      menuPage();
    };
    nav.appendChild(menu);
  })();

  const locations = (() => {
    const location = document.createElement("div");
    location.id = "locations";
    location.textContent = "LOCATIONS";
    location.onclick = () => {
      clear();
      locationPage();
    };
    nav.appendChild(location);
  })();

  const socials = (() => {
    const container = document.createElement("div");
    container.className = "socials"
    nav.appendChild(container);

    const socialsContainer = document.querySelector(".socials");

    const facebook = (() => {
      const logo = document.createElement("img") 
      logo.src = fb;
      logo.className = "fb-logo";
      socialsContainer.appendChild(logo);
    })();

    const instagram = (() => {
      const logo = document.createElement("img") 
      logo.src = ig;
      logo.className = "ig-logo";
      socialsContainer.appendChild(logo);
    })();

    const twitter = (() => {
      const logo = document.createElement("img") 
      logo.src = twtr;
      logo.className = "twtr-logo";
      socialsContainer.appendChild(logo);
    })();

    const youtube = (() => {
      const logo = document.createElement("img") 
      logo.src = yt;
      logo.className = "yt-logo";
      socialsContainer.appendChild(logo);
    })();

    const yelp = (() => {
      const logo = document.createElement("img") 
      logo.src = yp;
      logo.className = "yelp-logo";
      socialsContainer.appendChild(logo);
    })();
  })();

  function clear () {
    const clear = document.querySelector("main");
    clear.textContent = "";
}
}
