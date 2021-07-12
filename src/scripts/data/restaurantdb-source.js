import API_ENDPOINT from '../globals/api-endpoint';
import CONFIG from '../globals/config';

const RestaurantDbSource = {
  async restaurantList() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson;
  },

  async restaurantDetail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson;
  },

  async sendReview(data) {
    const response = await fetch(API_ENDPOINT.review, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': CONFIG.KEY,
      },
      body: JSON.stringify(data),
    });
    const responseJson = await response.json();
    return responseJson;
  },
};

export default RestaurantDbSource;
