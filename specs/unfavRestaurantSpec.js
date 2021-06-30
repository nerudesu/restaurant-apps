import FavBtnInitiator from '../src/scripts/utils/fav-button-initiator';
import FavoriteRestoIdb from '../src/scripts/data/favoriteresto-idb';

const addFavButtonContainer = () => {
  document.body.innerHTML = '<div class="bottom-right" id="favButtonContainer">';
};

describe('Unfavoriting A Restaurant', () => {
  beforeEach(async () => {
    addFavButtonContainer();
    await FavoriteRestoIdb.putResto({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestoIdb.deleteResto(1);
  });

  it('should display unfavorite button when the restaurant has been liked', async () => {
    await FavBtnInitiator.init({
      favBtnContainer: document.querySelector('#favButtonContainer'),
      restaurant: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="Remove from favorite"]'))
      .toBeTruthy();
  });

  it('should not display like widget when the movie has been liked', async () => {
    await FavBtnInitiator.init({
      favBtnContainer: document.querySelector('#favButtonContainer'),
      restaurant: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="Add to favorite"]'))
      .toBeFalsy();
  });

  it('should be able to remove favorited restaurant from the list', async () => {
    document.body.innerHTML += '<div id="snackbar">Some text some message..</div>';
    await FavBtnInitiator.init({
      favBtnContainer: document.querySelector('#favButtonContainer'),
      restaurant: {
        id: 1,
      },
    });

    document.querySelector('[aria-label="Remove from favorite"]').dispatchEvent(new Event('click'));

    expect(await FavoriteRestoIdb.getAllRestos()).toEqual([]);
  });

  it('should not throw error if the unliked movie is not in the list', async () => {
    document.body.innerHTML += '<div id="snackbar">Some text some message..</div>';
    await FavBtnInitiator.init({
      favBtnContainer: document.querySelector('#favButtonContainer'),
      restaurant: {
        id: 1,
      },
    });

    // hapus dulu film dari daftar film yang disukai
    await FavoriteRestoIdb.deleteResto(1);

    // kemudian, simulasikan pengguna menekan widget batal menyukai film
    document.querySelector('[aria-label="Remove from favorite"]').dispatchEvent(new Event('click'));

    expect(await FavoriteRestoIdb.getAllRestos()).toEqual([]);
  });
});
