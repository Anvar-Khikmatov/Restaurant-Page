import imgSrc from './img/main-logo.webp'

export function loadHome() {
    const content = document.getElementById('content');

    function createElement(element, classname, content) {
        element = document.createElement(element);
        if (classname) element.classList.add(classname);
        if (content) element.textContent = content;
        return element;
    }


    const home = document.createElement('div');
    home.classList.add('home')
    content.append(home);

    const section1 = document.createElement('div');
    section1.classList.add('section-1')


    const section1Header1 = document.createElement('h1');
    section1Header1.textContent = "Caravan Kitchen";

    const section1Header2 = document.createElement('h2');
    section1Header2.textContent = "Gourmet taste, nomadic soul";

    const mainLogo = document.createElement('img');
    mainLogo.classList.add('main-logo');
    mainLogo.src = imgSrc;
    mainLogo.alt = "National Uzbek Food";

    section1.append(section1Header1, section1Header2, mainLogo);



    const section2 = document.createElement('div');
    section2.classList.add('section-2')


    const section2Header2 = document.createElement('h2');
    section2Header2.textContent = "Our Specialties";

    const sec2Boxes = document.createElement('div');
    sec2Boxes.classList.add('sec2-boxes')
    section2.append(section2Header2, sec2Boxes);

    const firstSec2Box = document.createElement('div');
    firstSec2Box.classList.add('sec2-box');
    const emoji1 = createElement('p', "emoji", "🔥");
    const theme1 = createElement('p', "theme", "Our Heritage");
    const text1 = createElement('p', "text", "Traditional recipes crafted with rich spices and time-honored techniques");
    firstSec2Box.append(emoji1, theme1, text1);

    const secondSec2Box = document.createElement('div');
    secondSec2Box.classList.add('sec2-box');
    const emoji2 = createElement('p', "emoji", "🍽️");
    const theme2 = createElement('p', "theme", "Caravan Hospitality");
    const text2 = createElement('p', "text", "Warm service inspired by the Silk Road traditions of sharing and gathering");
    secondSec2Box.append(emoji2, theme2, text2);

    const thirdSec2Box = document.createElement('div');
    thirdSec2Box.classList.add('sec2-box');
    const emoji3 = createElement('p', "emoji", "👨‍🍳");
    const theme3 = createElement('p', "theme", "Culinary Craftsmanship");
    const text3 = createElement('p', "text", "Every dish prepared with care, skill, and respect for Uzbek culinary roots");
    thirdSec2Box.append(emoji3, theme3, text3);

    sec2Boxes.append(firstSec2Box, secondSec2Box, thirdSec2Box);


    const section3 = document.createElement('div');
    section3.classList.add('section-3')


    const sec3Header = createElement('h2', null, "Opening Hours");
    const sec3p1 = createElement('p', null, "Mon – Fri: 11:00 AM – 10:00 PM");
    const sec3p2 = createElement('p', null, "Saturday: 12:00 PM – 11:00 PM");
    const sec3p3 = createElement('p', null, "Sunday: Closed");

    section3.append(sec3Header, sec3p1, sec3p2, sec3p3);


    home.append(section1, section2, section3);

}
