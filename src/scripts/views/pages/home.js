import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';
import loadingSpinner from '../../utils/spinner';

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
    const restaurantsContainer = document.getElementById('restaurant-list');

    // Add loading indicator
    restaurantsContainer.innerHTML = loadingSpinner;

    // Add notif page cannot be loaded
    try {
      const { restaurants } = await RestaurantDbSource.restaurantList();

      restaurantsContainer.innerHTML = '';
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    } catch (e) {
      restaurantsContainer.innerHTML = `<p class="no-fav">Error "${e}", try to refresh the page</p>`;
    }
  },
};

export default Home;
