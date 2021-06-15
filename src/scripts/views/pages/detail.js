import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
    <section class="content">
      <div class="explore">
        <h1 class="explore-label">Restaurant Detail</h1>
        <div class="restaurants" id="restaurant-details">
        </div>
      </div>
    </section>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDbSource.restaurantDetail(url.id);
    const restaurantContainer = document.getElementById('restaurant-details');
    // eslint-disable-next-line no-console
    console.log(restaurant);

    // TODO: Show list inside DOM
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
  },
};

export default Detail;
