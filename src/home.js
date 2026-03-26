import { propertyType, createElement } from './utils';
import imgSrc from './img/main-logo.webp'

export function loadHome() {
    const content = document.getElementById('content');

    const home = createElement('div', propertyType.CLASS, 'home');

    content.append(home);

    home.append(createSectionOne(), createSectionTwo(), createSectionThree());
}

function createSectionOne() {
    const sectionOne = createElement('div', propertyType.CLASS, 'section-one');

    const sectionOneHeader = createElement('h1');
    sectionOneHeader.textContent = 'Caravan Kitchen';

    const sectionOneSubHeader = createElement('h2');
    sectionOneSubHeader.textContent = 'Gourmet taste, nomadic soul';

    const sectionOneImage = new Image();
    sectionOneImage.classList.add('main-logo');
    sectionOneImage.src = imgSrc;
    sectionOneImage.alt = 'National Uzbek Food';

    sectionOne.append(sectionOneHeader, sectionOneSubHeader, sectionOneImage);

    return sectionOne;
}

function createSectionTwoBox(emojiHeader, subHeaderText, bodyText) {
    const sectionBox = createElement('div', propertyType.CLASS, 'section-two-box');

    const header = createElement('p', propertyType.CLASS, 'emoji');
    header.innerText = emojiHeader;

    const subHeader = createElement('p', propertyType.CLASS, 'theme');
    subHeader.innerText = subHeaderText;

    const body = createElement('p', propertyType.CLASS, 'text');
    body.innerText = bodyText;

    sectionBox.append(header, subHeader, body);

    return sectionBox;
}

function createSectionTwo() {
    const sectionTwo = createElement('div', propertyType.CLASS, 'section-two');

    const sectionTwoHeader = createElement('h2');
    sectionTwoHeader.textContent = 'Our Specialties';

    const sectionTwoBoxes = createElement('div', propertyType.CLASS, 'section-two-boxes');


    const firstSec2Box = createSectionTwoBox(
        '🔥',
        'Our Heritage',
        'Traditional recipes crafted with rich spices and time-honored techniques'
    );

    const secondSec2Box = createSectionTwoBox(
        '🍽️',
        'Caravan Hospitality',
        'Warm service inspired by the Silk Road traditions of sharing and gathering'
    );

    const thirdSec2Box = createSectionTwoBox(
        '👨‍🍳',
        'Culinary Craftsmanship',
        'Every dish prepared with care, skill, and respect for Uzbek culinary roots'
    );

    sectionTwoBoxes.append(firstSec2Box, secondSec2Box, thirdSec2Box);

    sectionTwo.append(sectionTwoHeader, sectionTwoBoxes);

    return sectionTwo;
}

function createSectionThree() {
    const sectionThree = createElement('div', propertyType.CLASS, 'section-three');

    const sectionThreeHeader = createElement('h2');
    sectionThreeHeader.textContent = 'Opening Hours';

    const sectionThreeBody = createElement('p');
    sectionThreeBody.innerHTML = 'Mon - Fri: 11:00 AM - 10:00 PM <br> Saturday: 12:00 PM - 11:00 PM <br> Sunday: Closed';

    sectionThree.append(sectionThreeHeader, sectionThreeBody);

    return sectionThree;

}
