import FavBtnPresenter from '../../src/scripts/utils/fav-button-presenter';
import FavoriteRestoIdb from '../../src/scripts/data/favoriteresto-idb';

export const createFavButtonPresenterWithRestaurant = async (restaurant) => {
  await FavBtnPresenter.init({
    favBtnContainer: document.querySelector('#favButtonContainer'),
    favRestos: FavoriteRestoIdb,
    restaurant,
  });
};

export default { createFavButtonPresenterWithRestaurant };
