/* eslint-disable no-undef */
import FavBtnInitiator from '../src/scripts/utils/fav-button-initiator';
import FavoriteRestoIdb from '../src/scripts/data/favoriteresto-idb';

describe('Favoriting A Restaurant', () => {
  const addFavButtonContainer = () => {
    document.body.innerHTML = '<div class="bottom-right" id="favButtonContainer">';
  };

  beforeEach(() => {
    addFavButtonContainer();
  });

  it('should show the favorite button when the restaurant has not been favorited before', async () => {
    await FavBtnInitiator.init({
      favBtnContainer: document.querySelector('#favButtonContainer'),
      restaurant: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="Add to favorite"]'))
      .toBeTruthy();
  });

  it('should not show the unfavorite button when the restaurant has not been favorited before', async () => {
    await FavBtnInitiator.init({
      favBtnContainer: document.querySelector('#favButtonContainer'),
      restaurant: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="Remove from favorite"]'))
      .toBeFalsy();
  });

  it('should be able to like the Restaurant', async () => {
    document.body.innerHTML += '<div id="snackbar">Some text some message..</div>';
    await FavBtnInitiator.init({
      favBtnContainer: document.querySelector('#favButtonContainer'),
      restaurant: {
        id: 1,
      },
    });

    document.querySelector('#favoriteButton').dispatchEvent(new Event('click'));
    const restaurant = await FavoriteRestoIdb.getResto(1);

    expect(restaurant).toEqual({ id: 1 });

    FavoriteRestoIdb.deleteResto(1);
  });

  it('should not add a restaurant again when its already liked', async () => {
    document.body.innerHTML += '<div id="snackbar">Some text some message..</div>';
    await FavBtnInitiator.init({
      favBtnContainer: document.querySelector('#favButtonContainer'),
      restaurant: {
        id: 1,
      },
    });

    await FavoriteRestoIdb.putResto({ id: 1 });
    document.querySelector('#favoriteButton').dispatchEvent(new Event('click'));

    // no duplicate resto
    expect(await FavoriteRestoIdb.getAllRestos()).toEqual([{ id: 1 }]);

    FavoriteRestoIdb.deleteResto(1);
  });

  // TODO: Alur negatif menyimpan movie tanpa ID tidak boleh menyebabkan kegagalan.
  xit('should not add a restaurant when it has no id', async () => {
    document.body.innerHTML += '<div id="snackbar">Some text some message..</div>';
    await FavBtnInitiator.init({
      favBtnContainer: document.querySelector('#favButtonContainer'),
      restaurant: {},
    });

    document.querySelector('#favoriteButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestoIdb.getAllRestos()).toEqual([]);
  });
});
