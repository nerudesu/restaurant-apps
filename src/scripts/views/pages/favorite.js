import FavoriteRestoIdb from '../../data/favoriteresto-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <section class="content">
        <div class="explore">
          <h1 class="explore-label">Favorite Restaurant</h1>
          <div class="restaurants" id="restaurant-list">
          </div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestoIdb.getAllRestos();
    const restaurantsContainer = document.getElementById('restaurant-list');

    if (!restaurants.length) {
      restaurantsContainer.innerHTML = '<p class="no-fav">You don\'t have any, explore for one!</p>';
    }

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorite;
