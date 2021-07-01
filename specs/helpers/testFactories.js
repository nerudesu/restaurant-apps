import FavBtnPresenter from '../../src/scripts/utils/fav-button-presenter';

const createFavButtonPresenterWithRestaurant = async (restaurant) => {
  await FavBtnPresenter.init({
    favBtnContainer: document.querySelector('#favButtonContainer'),
    restaurant,
  });
};

export { createFavButtonPresenterWithRestaurant };
