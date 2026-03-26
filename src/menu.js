import { createElement, propertyType } from './utils.js'
import somsa from './img/somsa.webp'
import norin from './img/norin.webp'
import achik_chuchuk from './img/achik-chuchuk.webp'
import plov from './img/plov.jpg'
import shashlik from './img/shashlik.webp'
import honim from './img/honim.webp'
import moshxorda from './img/moshxorda.webp'
import lagman from './img/lagman.webp'
import dimlama from './img/dimlama.webp'
import nisholda from './img/nisholda.webp'
import baklava from './img/baklava.webp'
import medovik from './img/medovik.webp'

const menu = {
    'Starters': [
        {
            name: 'Samsa',
            description: 'Flaky pastry filled with seasoned meat and onions, baked until golden in a traditional tandoor oven.',
            price: 1.00,
            imgSrc: somsa,
        },
        {
            name: 'Naryn',
            description: 'Hand-cut noodles mixed with tender meat, served chilled with light seasoning.',
            price: 4.00,
            imgSrc: norin,
        },
        {
            name: 'Achichuk',
            description: 'Fresh tomatoes, onions, and herbs, lightly seasoned for a crisp, refreshing taste.',
            price: 1.50,
            imgSrc: achik_chuchuk,
        }
    ],

    'Main Dishes': [
        {
            name: 'Plov',
            description: 'Hearty rice with tender meat, carrots, and onions, cooked in traditional Uzbek style.',
            price: 5.00,
            imgSrc: plov,
        },
        {
            name: 'Kebab',
            description: 'Juicy skewered meat grilled over open flames, seasoned for rich, smoky flavor.',
            price: 1.60,
            imgSrc: shashlik,
        },
        {
            name: 'Hanum',
            description: 'Soft steamed dough layered with seasoned meat and onions, served warm and flavorful.',
            price: 4.00,
            imgSrc: honim,
        },
        {
            name: 'Mashhurda',
            description: 'Hearty mung bean and rice soup with tender meat and vegetables.',
            price: 3.00,
            imgSrc: moshxorda,
        },
        {
            name: 'Laghman',
            description: 'Hand-pulled noodles served with tender meat, vegetables, and flavorful broth.',
            price: 2.50,
            imgSrc: lagman,
        },
        {
            name: 'Dimlama',
            description: 'Slow-cooked meat and vegetables, covered and steamed with cabbage until tender and full of flavor.',
            price: 7.00,
            imgSrc: dimlama,
        }
    ],

    'Desserts': [
        {
            name: 'Nisholda',
            description: 'Light, airy sweet made from whipped egg whites and sugar, delicately smooth and fluffy.',
            price: 1.00,
            imgSrc: nisholda,
        },
        {
            name: 'Baklava',
            description: 'Layered pastry filled with nuts and honey syrup, rich and sweet.',
            price: 3.00,
            imgSrc: baklava,
        },
        {
            name: 'Medovik',
            description: 'Layered honey cake with soft cream filling, delicate and lightly caramelized.',
            price: 2.00,
            imgSrc: medovik,
        }
    ],
};

export function loadMenu() {
    const content = document.getElementById('content');
    content.append(createFoodContainer());
}

function createFoodContainer() {
    const mainFoodContainer = createElement('div', propertyType.CLASS, 'menu');
    for (const [category, foods] of Object.entries(menu)) {
        const foodContainer = createElement('div', propertyType.CLASS, 'food-container');
        const foodCategoryHeader = createElement('h2');

        foodCategoryHeader.textContent = category;

        for (const food of foods) {
            const foodBox = createFoodBox(food.imgSrc, food.name, food.description, food.price);
            foodContainer.appendChild(foodBox);
        }

        mainFoodContainer.appendChild(foodCategoryHeader);
        mainFoodContainer.appendChild(foodContainer);
    }
    return mainFoodContainer;
}

function createFoodBox(imgSrc, name, description, price) {
    const foodBox = createElement('div', propertyType.CLASS, 'food-box');

    const foodImgBox = createElement('div', propertyType.CLASS, 'starterImg');

    const foodImg = createElement('img', propertyType.SRC, imgSrc);
    foodImgBox.append(foodImg);

    const foodDetailsBox = createElement('div', propertyType.CLASS, 'starter-details-one');
    foodBox.append(foodImgBox, foodDetailsBox);

    const foodDetailsName = createElement('h3', propertyType.CLASS, 'food-details-name');
    foodDetailsName.textContent = name;

    const foodDetailsDescription = createElement('p', propertyType.CLASS, 'food-details-description');
    foodDetailsDescription.textContent = description;

    const foodDetailsPrice = createElement('p', propertyType.CLASS, 'food-details-price');
    foodDetailsPrice.textContent = `$${price.toFixed(2)}`;

    foodDetailsBox.append(foodDetailsName, foodDetailsDescription, foodDetailsPrice);

    return foodBox;
}
