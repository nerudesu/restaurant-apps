/* eslint-disable no-undef */
Feature('Favorite Restaurant');

const assert = require('assert');

const isEmpty = "You don't have any, explore for one!";

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty favorite restaurant', ({ I }) => {
  I.seeElement('.no-fav');
  I.see(isEmpty, '.no-fav');
});

Scenario('favoriting one restaurant', async ({ I }) => {
  // Ensure favorite restaurant is still empty
  I.seeElement('.no-fav');
  I.see(isEmpty, '.no-fav');

  // Open the main page
  I.amOnPage('/');

  // Select the first Restaurant
  I.seeElement('.restaurant-item__name');

  // Click the restaurant card - it'll bring us to restaurant detail page
  const firstRestaurant = locate('.restaurant-item__name').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);

  I.click(firstRestaurant);

  // Click the favorite restaurant button
  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  // Open the favorite page
  I.amOnPage('/#/favorite');

  // We see favorited Restaurant
  I.seeElement('.restaurant-item__name');
  const favoritedRestaurantTitle = await I.grabTextFrom('.restaurant-item__name');

  assert.strictEqual(firstRestaurantTitle, favoritedRestaurantTitle);
});

Scenario('unfavoriting one restaurant', async ({ I }) => {
  I.seeElement('.no-fav');
  I.see(isEmpty, '.no-fav');

  // Open the main page
  I.amOnPage('/');

  // Select the first Restaurant
  I.seeElement('.restaurant-item__name');

  // Click the restaurant card - it'll bring us to restaurant detail page
  const firstRestaurant = locate('.restaurant-item__name').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);

  I.click(firstRestaurant);

  // Click the favorite restaurant button
  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  // Open the favorite page
  I.amOnPage('/#/favorite');

  // We see favorited Restaurant
  I.seeElement('.restaurant-item__name');
  const favoritedRestaurantTitle = await I.grabTextFrom('.restaurant-item__name');

  assert.strictEqual(firstRestaurantTitle, favoritedRestaurantTitle);

  // Click the favorited restaurant card
  I.click(favoritedRestaurantTitle);

  // Unfavoriting restaurant
  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  // Back to favorite page
  I.amOnPage('/#/favorite');

  // Check if unfavoriting success
  I.seeElement('.no-fav');
  const noFavRestaurant = await I.grabTextFrom('.no-fav');
  assert.strictEqual(noFavRestaurant, isEmpty);
});

Scenario('customer review', async ({ I }) => {
  // Ensure favorite restaurant is still empty
  I.seeElement('.no-fav');
  I.see(isEmpty, '.no-fav');

  // Open the main page
  I.amOnPage('/');

  // Select the first Restaurant
  I.seeElement('.restaurant-item__name');

  // Click the restaurant card - it'll bring us to restaurant detail page
  const firstRestaurant = locate('.restaurant-item__name').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);

  I.click(firstRestaurant);

  // See review form
  I.seeElement('.form-inline');

  // Fill review form
  const name = 'pasryd';
  const randomNumber1 = String(Math.round(Math.random() * 1000));
  const randomNumber2 = String(Math.round(Math.random() * 100));
  const textReview = `[${randomNumber1}-${randomNumber2}] ${firstRestaurantTitle} e2e review`;

  I.fillField('name', name);
  I.fillField('review', textReview);

  // Submit form
  I.click('#submit-review');

  // See submitted review
  I.see(textReview, '.render-review');
});
