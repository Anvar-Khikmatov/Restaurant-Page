export function loadAbout() {
    const content = document.getElementById('content');
    const about = createElement('div', 'about');
    content.append(about);

    const aboutSectionOne = createSection(
        'Our Story',
        "Caravan Kitchen was born from a love for Uzbek culinary traditions. Inspired by the rich flavors of the Silk Road, we bring authentic recipes to life using fresh, local ingredients. Since our opening, we’ve been serving classic dishes like plov, somsa, and shashlik, crafted with care by our skilled chefs, all in a warm, inviting atmosphere that celebrates the spirit of Uzbek hospitality."
    );

    const aboutSectionTwo = createSection(
        'Location',
        `📍 5 Usta Olim St, 100109 <br>  Tashkent, Uzbekistan`
    );

    const menuSectionThree = createSection(
        "Contact",
        `📞 (71) 006 77 67 <br>📧  caravan@assist.com`,
    );

    about.append(aboutSectionOne, aboutSectionTwo, menuSectionThree);
}

function createElement(elementType, elementclass) {
    const element = document.createElement(elementType);
    element.classList.add(elementclass);

    return element;
}

function createSection(heading, innerHtml) {
    const sectionDiv = createElement('div', 'about-section');
    const sectionHeading = createElement('h2', 'about-section-header');
    const sectionText = createElement('p', 'about-section-text');

    sectionHeading.textContent = heading;
    sectionText.innerHTML = innerHtml;

    sectionDiv.appendChild(sectionHeading);
    sectionDiv.appendChild(sectionText);
    return sectionDiv;
}
