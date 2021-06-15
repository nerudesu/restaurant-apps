import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
  <article class="restaurant-item">
  <div class="container">
      <img class="restaurant-item__thumbnail"
          src="${CONFIG.BASE_IMAGE_URL('large') + restaurant.pictureId}"
          alt="Gambar restaurant ${restaurant.name}">
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
  <div>
    Gambar: ${restaurant.restaurant.pictureId}
  </div>
  <div>
    Alamat Lengkap: ${restaurant.restaurant.address}, ${restaurant.restaurant.city}
  </div>
  <div>
    Kategori Menu: ${restaurant.restaurant.categories}
  </div>
  <div>
    Menu Makanan: ${restaurant.restaurant.menus.foods[1].name}
  </div>
  <div>
    Menu Minuman: ${restaurant.restaurant.menus.drinks}
  </div>
  <div>
    Rating: ${restaurant.restaurant.rating}
  </div>
  <div>
    Customer Reviews
  </div>
  Favorite Button
`;

// eslint-disable-next-line import/prefer-default-export
export { createRestaurantItemTemplate, createRestaurantDetailTemplate };
