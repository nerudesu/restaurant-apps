import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <section class="content">
      <div class="explore">
        <h1 class="explore-label">Explore Restaurant</h1>
        <div class="restaurants" id="restaurant-list">
        </div>
      </div>
    </section>
    `;
  },

  async afterRender() {
    // This function will be called after render()
    const { restaurants } = await RestaurantDbSource.restaurantList();
    const restaurantsContainer = document.getElementById('restaurant-list');

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
