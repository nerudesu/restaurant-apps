import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
  <article class="restaurant-item">
  <div class="container">
      <img class="restaurant-item__thumbnail"
          src="${CONFIG.BASE_IMAGE_URL('large') + restaurant.pictureId}"
          alt="Image restaurant ${restaurant.name}">
      <div class="top-left">
          <p class="restaurant-item__city"><i class="fas fa-map-marker-alt"></i> ${restaurant.city}</p>
          <h1 class="restaurant-item__name"><a class="link-detail" href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h1>
      </div>
      <div class="bottom-left">
          <p class="restaurant-item__rating"><i class="fas fa-star checked"></i> ${restaurant.rating}</p>
      </div>
      <div class="bottom-right">
          <button class="button" type="button" aria-label="Add to favorite ${restaurant.name}">
              <i class="far fa-heart"></i>
          </button>
      </div>
  </div>
  <div class="restaurant-item__content">
      <p class="restaurant-item__description">${restaurant.description.substr(0, 144).concat(' ....')}</p>
  </div>
  </article>
`;

const createRestaurantDetailTemplate = (restaurant) => `
  <article class="restaurant-detail-card">
    <div class="container">
      <img alt="Image ${restaurant.restaurant.name}"
        src="${CONFIG.BASE_IMAGE_URL('small') + restaurant.restaurant.pictureId}"
        class="restaurant-item__thumbnail">
      <div class="top-left">
          <p class="restaurant-item__city">
            <i class="fas fa-map-marker-alt"></i> ${restaurant.restaurant.address}, ${restaurant.restaurant.city}
          </p>
          <h1 class="restaurant-item__name">${restaurant.restaurant.name}</h1>
      </div>
      <div class="bottom-left">
          <p class="restaurant-item__rating"><i class="fas fa-star checked"></i> ${restaurant.restaurant.rating}</p>
      </div>
      <div class="bottom-right">
          <button class="button" type="button" aria-label="Add to favorite ${restaurant.restaurant.name}">
              <i class="far fa-heart"></i>
          </button>
      </div>
    </div>
    <div class="detail-item">
      <h2>Categories</h2>
      ${restaurant.restaurant.categories.map((category) => `<mark>${category.name}</mark>`).join(' ')}
    </div>
    <div class="detail-container">
      <div class="detail-item" id="detail-item-desc">
        <h2>Overview</h2>
        <p>${restaurant.restaurant.description}</p>
      </div>
      <div class="detail-item" id="detail-item-menu">
        <h2>Menus</h2>
        <div class="menus">
          <h3>Foods</h3>
          <ol>
            ${restaurant.restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
          </ol>
        </div>
        <div class="menus">
          <h3>Drinks</h3>
          <ol>
            ${restaurant.restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
          </ol>
        </div>
      </div>
      <div class="detail-item" id="detail-item-review">
        <h2>Customer Reviews</h2>
        <div class="review-form">
          <form class="form-inline" id="add-review">
            <label for="name">Name:</label><br>
            <input type="text" id="name" name="name" placeholder="Write down your name"><br>
            <label for="review">Review:</label><br>
            <input type="text" id="review" name="review" placeholder="Give your feedback"><br><br>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div class="render-review">
        ${restaurant.restaurant.customerReviews.map((review) => `
          By ${review.name} on ${review.date}<br>
          ${review.review}<br>
          <hr>
        `).join('')}
        </div>
      </div>
    </div>
  </article>
`;

// eslint-disable-next-line import/prefer-default-export
export { createRestaurantItemTemplate, createRestaurantDetailTemplate };
