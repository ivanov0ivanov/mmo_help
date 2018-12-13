'use strict';
let logo = document.querySelector('.header-logo');
logo.style.cursor = 'pointer';
logo.addEventListener('click', () => {
    open('https://mmo-help.ru/');
});

let offer1 = document.querySelector('.qD1');
let offer2 = document.querySelector('.qD2');
let offer3 = document.querySelector('.qD3');
let offer4 = document.querySelector('.qD4');
let questionDescription = document.querySelector('.question-description');

addEventListener('mouseout', () => {
    questionDescription.style.display = 'none';
});

offer1.addEventListener('mouseover', () => {
    questionDescription.style.left = '200px';
    questionDescription.style.display = 'block';
});


offer2.addEventListener('mouseover', () => {
    questionDescription.style.left = '500px';
    questionDescription.style.display = 'block';
});


offer3.addEventListener('mouseover', () => {
    questionDescription.style.left = '800px';
    questionDescription.style.display = 'block';
});


offer4.addEventListener('mouseover', () => {
    questionDescription.style.left = '1090px';
    questionDescription.style.display = 'block';
});








