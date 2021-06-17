/* eslint-disable no-console */
import RestaurantDbSource from '../data/restaurantdb-source';

const AddReview = (id, name, review) => {
  const dataInput = {
    id, name, review,
  };

  RestaurantDbSource.sendReview(dataInput).then((res) => {
    const content = `${res.customerReviews.map((rev) => `
      By ${rev.name} on ${rev.date}<br>
      ${rev.review}<br>
      <hr>
    `).join('')}`;
    const RenderReview = document.querySelector('.render-review');
    RenderReview.innerHTML = content;
  }).catch(() => {
    console.log('Rejected');
  });
};

export default AddReview;
