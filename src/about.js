export function loadAbout(){


const content = document.getElementById('content');
const about = document.createElement('div')
about.classList.add('about');
content.append(about);

const menuSection1 = document.createElement('div');
menuSection1.classList.add('about-section');
const section1Header = document.createElement('h2');
section1Header.classList.add('about-section-header')
section1Header.textContent = "Our Story"
const section1Text = document.createElement('p');
section1Text.classList.add('about-section-text');
section1Text.textContent = "Caravan Kitchen was born from a love for Uzbek culinary traditions. Inspired by the rich flavors of the Silk Road, we bring authentic recipes to life using fresh, local ingredients. Since our opening, we’ve been serving classic dishes like plov, somsa, and shashlik, crafted with care by our skilled chefs, all in a warm, inviting atmosphere that celebrates the spirit of Uzbek hospitality."
menuSection1.append(section1Header, section1Text);


const menuSection2 = document.createElement('div');
menuSection2.classList.add('about-section');
const section2Header = document.createElement('h2');
section2Header.classList.add('about-section-header')
section2Header.textContent = "Location"
const section2Text = document.createElement('p');
section2Text.classList.add('about-section-text');
section2Text.innerHTML = `📍 5 Usta Olim St, 100109 <br>  Tashkent, Uzbekistan`;
menuSection2.append(section2Header, section2Text);


const menuSection3 = document.createElement('div');
menuSection3.classList.add('about-section-last');
const section3Header = document.createElement('h2');
section3Header.classList.add('about-section-header')
section3Header.textContent = "Contact"
const section3Text = document.createElement('p');
section3Text.classList.add('about-section-text');
section3Text.innerHTML = `📞 (71) 006 77 67 <br>📧  caravan@assist.com`;
menuSection3.append(section3Header, section3Text);

about.append(menuSection1, menuSection2, menuSection3);



}