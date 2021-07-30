/* eslint-disable no-undef */
Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#query');
  I.see('Tidak ada resto untuk ditampilkan', '.resto-item__not__found');
});

Scenario('liking one resto', ({ I }) => {
  I.amOnPage('/');

  I.seeElement('.resto__name a');
  I.click(locate('.resto__name a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('#query');
  I.seeElement('.resto-item');
});


// Scenario('searching restaurants', async ({ I }) => {
//   I.see('Tidak ada resto untuk ditampilkan', '.resto-item__not__found');

//   I.amOnPage('/');

//   I.seeElement('.resto__name a');

//   const titles = [];

//   for (let i = 1; i <= 3; i++) {
//     I.click(locate('.resto__name a').at(i));
//     I.seeElement('#likeButton');
//     I.click('#likeButton');
//     titles.push(await I.grabTextFrom('.resto__name'));
//     I.amOnPage('/');
//   }

//   I.amOnPage('/#/favorite');
//   I.seeElement('#query');

  // const searchQuery = names[1].substring(1, 3);
  // const matchingRestaurants = names.filter((name) => name.indexOf(searchQuery) !== -1);

  // I.fillField('#query', searchQuery);
  // I.pressKey('Enter');

  // const visibleLikedRestaurants = await I.grabNumberOfVisibleElements('.resto-item');
  // assert.strictEqual(matchingRestaurants.length, visibleLikedRestaurants);

  // matchingRestaurants.forEach(async (title, index) => {
  //   const visibleName = await I.grabTextFrom(locate('.resto__name').at(index + 1));
  //   assert.strictEqual(name, visibleName);
  // });
// });
