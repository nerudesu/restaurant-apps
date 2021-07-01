import FavBtnPresenter from '../../src/scripts/utils/fav-button-presenter';

export const createFavButtonPresenterWithRestaurant = async (restaurant) => {
  await FavBtnPresenter.init({
    favBtnContainer: document.querySelector('#favButtonContainer'),
    restaurant,
  });
};

export default { createFavButtonPresenterWithRestaurant };
