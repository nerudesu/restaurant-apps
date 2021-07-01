/* eslint-disable no-undef */
import { itActsAsFavoriteRestoModel } from './contract/favoriteRestaurantContract';

let favoriteRestos = [];

const FavoriteRestoArray = {

  getResto(id) {
    if (!id) {
      return undefined;
    }

    return favoriteRestos.find((restaurant) => restaurant.id === id);
  },

  getAllRestos() {
    return favoriteRestos;
  },

  putResto(restaurant) {
    if (!Object.prototype.hasOwnProperty.call(restaurant, 'id')) {
      return;
    }

    // ensure id not in favoriteRestos list
    if (this.getResto(restaurant.id)) {
      return;
    }

    favoriteRestos.push(restaurant);
  },

  deleteResto(id) {
    favoriteRestos = favoriteRestos.filter((restaurant) => restaurant.id !== id);
  },
};

describe('Favorite Restaurant Array Contract Test Implementation', () => {
  afterEach(() => { favoriteRestos = []; });

  itActsAsFavoriteRestoModel(FavoriteRestoArray);
});
