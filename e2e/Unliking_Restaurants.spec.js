/* eslint-disable no-undef */
Feature('Unliking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
  I.see('Tidak ada resto untuk ditampilkan', '.resto-item__not__found');
  I.amOnPage('/');
  I.seeElement('.resto__name a');
  I.click(locate('.resto__name a').first());
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
//   I.seeElement('#query');
//   I.seeElement('.resto-item')

});

Scenario('showing liked restaurants', ({ I }) => {
  I.seeElement('#query');
  I.seeElement('.resto-item');
  // I.seeElement('.query'); // membuat test menjadi gagal\

// ;
});

Scenario('unliking one resto', ({ I }) => {
    I.seeElement('#query');
    // I.seeElement('.restaurants');
     I.seeElement('.resto-item');
     I.click(locate('.resto__name a').first());

     I.seeElement('#likeButton');
     I.click('#likeButton');

     I.amOnPage('/#/favorite');
     I.see('Tidak ada resto untuk ditampilkan', '.resto-item__not__found');
});
