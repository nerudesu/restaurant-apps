/* eslint-disable no-undef */
Feature('Review Restaurant');

const isEmpty = "You don't have any, explore for one!";

Before(({ I }) => {
  I.amOnPage('/#/favorite');
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
