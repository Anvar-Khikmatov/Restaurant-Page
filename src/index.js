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


function clearContent() {
    document.getElementById('content').innerHTML = "";
}

function setActiveBtn(btn) {
    [homeBtn, menuBtn, aboutBtn].forEach(b => b.classList.remove('active-btn-colors'))
    btn.classList.add('active-btn-colors');
}

headerLogo.addEventListener('click', () => {
    clearContent();
    setActiveBtn(aboutBtn)
    loadAbout();
})

homeBtn.addEventListener('click', () => {
    clearContent();
    setActiveBtn(homeBtn)
    loadHome();
})

menuBtn.addEventListener('click', () => {
    clearContent();
    setActiveBtn(menuBtn)
    loadMenu();
})

aboutBtn.addEventListener('click', () => {
    clearContent();
    setActiveBtn(aboutBtn)
    loadAbout();
})


loadHome();
homeBtn.classList.add('active-btn-colors')
