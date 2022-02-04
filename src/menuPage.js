import { menuItems } from "./menuConstructor";
import chickenKatsuPic from  "./img/ChickenKatsu.jpeg";
import potstickerPic from "./img/Potstickers.jpeg";
import combo from "./img/FriedCombo.jpeg";
import taco from "./img/KoreanTaco.jpeg";

export default function menuPage () {
    const container = document.createElement("div");
    container.className = "menu-page";
    document.querySelector("main").appendChild(container)

    const friedChicken = new menuItems("Korean Fried Chicken", "$15.95", "Combo 6 Wings + 3 Drums", combo);
    friedChicken.appendMenuItem();

    const potstickers = new menuItems("Potstickers", "$9.95", "Lightly fired pork or vegetable dumplings brushed with signature sauce.", potstickerPic);
    potstickers.appendMenuItem();

    const koreanTacos = new menuItems("Korean Tacos", "$10.95", "Choice of spicy chicken or marinated ribeye over three flour tortillas. Topped with lettuce, coleslaw, buttermilk ranch, spicy mayo and red onions.", taco);
    koreanTacos.appendMenuItem();

    const chickenKatsu = new menuItems("Chicken Katsu", "$11.95", "Breaded chicken cutlet served with steamed rice, and drizzeled with katsu sauce and spicy mayo.", chickenKatsuPic);
    chickenKatsu.appendMenuItem();
};

