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


export function loadMenu() {

    const content = document.getElementById('content');

    function createFoodBox(imgSrc, name, description, price) {
        const foodBox = document.createElement('div');
        foodBox.classList.add('food-box');

        const foodImgBox = document.createElement('div');
        foodImgBox.classList.add('starterImg');
        const foodImg = document.createElement('img');
        foodImg.src = imgSrc;
        foodImgBox.append(foodImg);

        const foodDetailsBox = document.createElement('div');
        foodDetailsBox.classList.add('starterDetails1');
        foodBox.append(foodImgBox, foodDetailsBox);

        const foodDetailsName = document.createElement('h3');
        foodDetailsName.classList.add('food-details-name');
        foodDetailsName.textContent = name;

        const foodDetailsDescription = document.createElement('p');
        foodDetailsDescription.classList.add('food-details-description');
        foodDetailsDescription.textContent = description;

        const foodDetailsPrice = document.createElement('p');
        foodDetailsPrice.classList.add('food-details-price');
        foodDetailsPrice.textContent = price
        foodDetailsBox.append(foodDetailsName, foodDetailsDescription, foodDetailsPrice);

        return foodBox;
    }



    const menu = document.createElement('div');
    menu.classList.add('menu')
    content.append(menu);

    const starter = document.createElement('h2');
    starter.textContent = "Starters";
    const starterFoodContainer = document.createElement('div');
    starterFoodContainer.classList.add('food-container');
    menu.append(starter, starterFoodContainer);

    let starterFood1Name = "Samsa";
    let starterFood1Description = "Flaky pastry filled with seasoned meat and onions, baked until golden in a traditional tandoor oven.";
    let starterFood1Price = "$1";
    const starterFoodbox1 = createFoodBox(somsa, starterFood1Name, starterFood1Description, starterFood1Price);

    let starterFood2Name = "Naryn";
    let starterFood2Description = "Hand-cut noodles mixed with tender meat, served chilled with light seasoning.";
    let starterFood2Price = "$4"
    const starterFoodbox2 = createFoodBox(norin, starterFood2Name, starterFood2Description, starterFood2Price);


    let starterFood3Name = "Achichuk";
    let starterFood3Description = "HaFresh tomatoes, onions, and herbs, lightly seasoned for a crisp, refreshing taste.";
    let starterFood3Price = "$1.50"
    const starterFoodbox3 = createFoodBox(achik_chuchuk, starterFood3Name, starterFood3Description, starterFood3Price);

    starterFoodContainer.append(starterFoodbox1, starterFoodbox2, starterFoodbox3);




    const mainDish = document.createElement('h2');
    mainDish.textContent = "Main Dishes";
    const mainFoodContainer = document.createElement('div');
    mainFoodContainer.classList.add('food-container');
    menu.append(mainDish, mainFoodContainer);

    let mainFood1Name = "Plov";
    let mainFood1Description = "Hearty rice with tender meat, carrots, and onions, cooked in traditional Uzbek style.";
    let mainFood1Price = "$5";
    const mainFoodbox1 = createFoodBox(plov, mainFood1Name, mainFood1Description, mainFood1Price);

    let mainFood2Name = "Kebab";
    let mainFood2Description = "Juicy skewered meat grilled over open flames, seasoned for rich, smoky flavor.";
    let mainFood2Price = "$1.60";
    const mainFoodbox2 = createFoodBox(shashlik, mainFood2Name, mainFood2Description, mainFood2Price);

    let mainFood3Name = "Hanum";
    let mainFood3Description = "Soft steamed dough layered with seasoned meat and onions, served warm and flavorful.";
    let mainFood3Price = "$4";
    const mainFoodbox3 = createFoodBox(honim, mainFood3Name, mainFood3Description, mainFood3Price);

    let mainFood4Name = "Mashhurda";
    let mainFood4Description = "Hearty mung bean and rice soup with tender meat and vegetables.";
    let mainFood4Price = "$3";
    const mainFoodbox4 = createFoodBox(moshxorda, mainFood4Name, mainFood4Description, mainFood4Price);

    let mainFood5Name = "Laghman";
    let mainFood5Description = "Hand-pulled noodles served with tender meat, vegetables, and flavorful broth.";
    let mainFood5Price = "$2.50";
    const mainFoodbox5 = createFoodBox(lagman, mainFood5Name, mainFood5Description, mainFood5Price);

    let mainFood6Name = "Dimlama";
    let mainFood6Description = "Slow-cooked meat and vegetables, covered and steamed with cabbage until tender and full of flavor.";
    let mainFood6Price = "$7";
    const mainFoodbox6 = createFoodBox(dimlama, mainFood6Name, mainFood6Description, mainFood6Price);

    mainFoodContainer.append(mainFoodbox1, mainFoodbox2, mainFoodbox3, mainFoodbox4, mainFoodbox5, mainFoodbox6);



    const desserts = document.createElement('h2');
    desserts.textContent = "Desserts";
    const dessertFoodContainer = document.createElement('div');
    dessertFoodContainer.classList.add('food-container-last');
    menu.append(desserts, dessertFoodContainer);

    let dessertFood1Name = "Nisholda";
    let dessertFood1Description = "Light, airy sweet made from whipped egg whites and sugar, delicately smooth and fluffy.";
    let dessertFood1Price = "$1";
    const dessertFoodbox1 = createFoodBox(nisholda, dessertFood1Name, dessertFood1Description, dessertFood1Price);

    let dessertFood2Name = "Baklava";
    let dessertFood2Description = "Layered pastry filled with nuts and honey syrup, rich and sweet.";
    let dessertFood2Price = "$3";
    const dessertFoodbox2 = createFoodBox(baklava, dessertFood2Name, dessertFood2Description, dessertFood2Price);

    let dessertFood3Name = "Medovik";
    let dessertFood3Description = "Layered honey cake with soft cream filling, delicate and lightly caramelized.";
    let dessertFood3Price = "$2";
    const dessertFoodbox3 = createFoodBox(medovik, dessertFood3Name, dessertFood3Description, dessertFood3Price);

    dessertFoodContainer.append(dessertFoodbox1, dessertFoodbox2, dessertFoodbox3);


}
