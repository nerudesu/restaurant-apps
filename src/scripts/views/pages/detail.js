import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import AddReview from '../../utils/add-review';
import FavBtnInitiator from '../../utils/fav-button-initiator';
import loadingSpinner from '../../utils/spinner';
import showToast from '../../utils/toast';

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
    <div id="snackbar">Some text some message..</div>
    `;
  },

  async afterRender() {
    // Add loading indicator
    const restaurantContainer = document.getElementById('restaurant-details');
    restaurantContainer.innerHTML = loadingSpinner;

    const url = UrlParser.parseActiveUrlWithoutCombiner();

    try {
      const data = await RestaurantDbSource.restaurantDetail(url.id);

      restaurantContainer.innerHTML = createRestaurantDetailTemplate(data);

      FavBtnInitiator.init({
        favBtnContainer: document.querySelector('#favButtonContainer'),
        restaurant: data.restaurant,
      });

      const btnSubmit = document.querySelector('#add-review');
      const nameInput = document.querySelector('#name');
      const reviewInput = document.querySelector('#review');

      btnSubmit.addEventListener('submit', (e) => {
        e.preventDefault();
        if (nameInput.value === '' || reviewInput.value === '') {
          showToast('Any input cannot be empty!');
          nameInput.value = '';
          reviewInput.value = '';
        } else {
          AddReview(url.id, nameInput.value, reviewInput.value);
          nameInput.value = '';
          reviewInput.value = '';
        }
      });
    } catch (e) {
      restaurantContainer.innerHTML = `<p class="no-fav">Error "${e}", try to refresh the page</p>`;
    }
  },
};

export default Detail;
