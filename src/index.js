import './style.css'
import { loadHome } from './home.js'
import { loadMenu } from './menu.js'
import { loadAbout } from './about.js'
import logo from './img/karavan.png'

const homeBtn = document.querySelector('.home-btn');
const menuBtn = document.querySelector('.menu-btn');
const aboutBtn = document.querySelector('.about-btn');
const headerLogo = document.querySelector('.header-logo');
headerLogo.src = logo;

function callback(e) {
    const clickedButtonClass = e.currentTarget.classList.value;

    clearContent();

    // the reason why we use .includes() instead of === is because once setActiveBtn() is called, clickedButtonClass
    // becomes 'home-btn active-btn-colors' instead of just 'home-btn' making it not enter the proper if statement
    if (clickedButtonClass.includes('home-btn'))
        loadHome();

    else if (clickedButtonClass.includes('menu-btn'))
        loadMenu();

    else if (clickedButtonClass.includes('about-btn') || clickedButtonClass.includes('header-logo'))
        loadAbout();

    setActiveBtn(e.currentTarget);
}

function clearContent() {
    document.getElementById('content').innerHTML = '';
}

function setActiveBtn(btn) {
    [homeBtn, menuBtn, aboutBtn].forEach(b => b.classList.remove('active-btn-colors'));

    // if the logo is pressed we want to make aboutBtn have `active-btn-colors` only
    if (btn === headerLogo) {
        aboutBtn.classList.add('active-btn-colors');
        return;
    }
    btn.classList.add('active-btn-colors');
}

headerLogo.addEventListener('click', callback);

homeBtn.addEventListener('click', callback);

menuBtn.addEventListener('click', callback);

aboutBtn.addEventListener('click', callback);

loadHome();
homeBtn.classList.add('active-btn-colors')
