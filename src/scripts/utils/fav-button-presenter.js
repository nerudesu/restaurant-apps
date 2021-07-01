/* eslint-disable no-underscore-dangle */
import FavoriteRestoIdb from '../data/favoriteresto-idb';
import { createFavRestoButtonTemplate, createUnfavRestoButtonTemplate } from '../views/templates/template-creator';
import showToast from './toast';

const FavBtnPresenter = {
  async init({ favBtnContainer, restaurant }) {
    this._favBtnContainer = favBtnContainer;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestoExist(id)) {
      this._renderFavorited();
    } else {
      this._renderFavorite();
    }
  },

  async _isRestoExist(id) {
    const restaurant = await FavoriteRestoIdb.getResto(id);
    return !!restaurant;
  },

  _renderFavorite() {
    this._favBtnContainer.innerHTML = createFavRestoButtonTemplate();

    const favBtn = document.querySelector('#favoriteButton');
    favBtn.addEventListener('click', async () => {
      await FavoriteRestoIdb.putResto(this._restaurant);
      showToast('Added to favorite', this._toaster);
      this._renderButton();
    });
  },

  _renderFavorited() {
    this._favBtnContainer.innerHTML = createUnfavRestoButtonTemplate();

    const favBtn = document.querySelector('#favoriteButton');
    favBtn.addEventListener('click', async () => {
      await FavoriteRestoIdb.deleteResto(this._restaurant.id);
      showToast('Removed from favorite', this._toaster);
      this._renderButton();
    });
  },
};

export default FavBtnPresenter;
