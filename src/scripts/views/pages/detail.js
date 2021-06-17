import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import AddReview from '../../utils/add-review';

const Detail = {
  async render() {
    return `
    <section class="content">
      <div class="explore">
        <h1 class="explore-label">Restaurant Detail</h1>
        <div class="restaurant" id="restaurant-details">
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

    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    const btnSubmit = document.querySelector('#add-review');
    const nameInput = document.querySelector('#name');
    const reviewInput = document.querySelector('#review');

    btnSubmit.addEventListener('submit', (e) => {
      e.preventDefault();
      if (nameInput.value === '' || reviewInput.value === '') {
        // TODO: Ganti Toast
        // eslint-disable-next-line no-alert
        alert('Inputan tidak boleh ada yang kosong');
        nameInput.value = '';
        reviewInput.value = '';
      } else {
        AddReview(url.id, nameInput.value, reviewInput.value);
        nameInput.value = '';
        reviewInput.value = '';
      }
    });
  },
};

export default Detail;
