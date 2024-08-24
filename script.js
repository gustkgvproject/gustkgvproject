/*
let icon = document.querySelector('.header-icon-container');

// Barras
let barTop = document.querySelector('.barTop');
let barMiddle = document.querySelector('.barMiddle');
let barBottom = document.querySelector('.barBottom');

// Navigtion Menu
let navigationContainer = document.querySelector('.navigationContainer');

icon.addEventListener('click', (e) => {
    barTop.classList.toggle('closeTop');
    barMiddle.classList.toggle('closeMiddle');
    barBottom.classList.toggle('closeBottom');

    navigationContainer.classList.toggle('navigationOpen');
})
*/

// Events of about us buttons
// First Block
let firstButton = document.getElementById('about-us-first-button');
let firstAboutText = document.querySelector(".first-block");
// Second Block
let secondButton = document.getElementById('about-us-second-button');
let secondAboutText = document.querySelector(".second-block");
// Third Block
let thirdButton = document.getElementById('about-us-third-button');
let thirdAboutText = document.querySelector(".third-block");

firstButton.classList.add('btn-open');
firstAboutText.classList.add('text-open');

firstButton.addEventListener('click', (e) => {
    secondAboutText.classList.remove('text-open');
    secondButton.classList.remove('btn-open');
    thirdAboutText.classList.remove('text-open');
    thirdButton.classList.remove('btn-open');

    firstButton.classList.toggle('btn-open');
    if(firstButton.classList.contains('btn-open')){
        firstAboutText.classList.add('text-open');
    } else {
        firstAboutText.classList.remove('text-open');
    }
})

secondButton.addEventListener('click', (e) => {
    firstAboutText.classList.remove('text-open');
    firstButton.classList.remove('btn-open');
    thirdAboutText.classList.remove('text-open');
    thirdButton.classList.remove('btn-open');

    secondButton.classList.toggle('btn-open');
    if(secondButton.classList.contains('btn-open')){
        secondAboutText.classList.add('text-open');
    } else {
        secondAboutText.classList.remove('text-open');
    }
})

thirdButton.addEventListener('click', (e) => {
    secondAboutText.classList.remove('text-open');
    secondButton.classList.remove('btn-open');
    firstAboutText.classList.remove('text-open');
    firstButton.classList.remove('btn-open');

    thirdButton.classList.toggle('btn-open');
    if(thirdButton.classList.contains('btn-open')){
        thirdAboutText.classList.add('text-open');
    } else {
        thirdAboutText.classList.remove('text-open');
    }
})