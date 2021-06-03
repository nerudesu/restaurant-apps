import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';

import './components/app-bar';
import './components/my-hero';
import './components/my-footer';

// Fetch data json
import data from '../DATA.json';

let content = '';
const dataRes = data.restaurants;

Object.keys(dataRes).forEach((key) => {
  // Object destructuring
  const {
    pictureId, rating, city, name, description,
  } = dataRes[key];

  const subdesc = description.substr(0, 144).concat(' ....');

  content += `<article class="restaurant-item">
                <div class="container">
                    <img class="restaurant-item__thumbnail"
                        src="${pictureId}"
                        alt="Gambar restaurant ${name}">
                    <div class="top-left">
                        <p class="restaurant-item__city"><i class="fas fa-map-marker-alt"></i> ${city}</p>
                        <h1 class="restaurant-item__name">${name}</h1>
                    </div>
                    <div class="bottom-left">
                        <p class="restaurant-item__rating"><i class="fas fa-star checked"></i> ${rating}</p>
                    </div>
                    <div class="bottom-right">
                        <button class="button" type="button" aria-label="Add to favorite ${name}">
                            <i class="far fa-heart"></i>
                        </button>
                    </div>
                </div>
                <div class="restaurant-item__content">
                    <p class="restaurant-item__description">${subdesc}</p>
                </div>
              </article>`;
});

document.getElementById('restaurant-list').innerHTML += content;

// Navigation
const menu = document.querySelector('#menu');
const hero = document.querySelector('.hero');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');

menu.addEventListener('click', (event) => {
  drawer.classList.toggle('open');
  event.stopPropagation();
});

hero.addEventListener('click', () => {
  drawer.classList.remove('open');
});

main.addEventListener('click', () => {
  drawer.classList.remove('open');
});
