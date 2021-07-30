/* eslint-disable implicit-arrow-linebreak */
import CONFIG from '../../globals/config';

// <img tabindex="0" src="${resto.pictureId}" alt="${resto.name}">
const createRestoDetailTemplate = (resto) => `
        <h2 tabindex="0" class="resto__title">${resto.name || '-'}</h2>
        <picture>
        <source media="(max-width: 600px)" data-srcset="${CONFIG.BASE_SMALL_IMAGE_URL + resto.pictureId}">
        <img class="lazyload" tabindex="0" class="resto__poster" data-src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name} || '-'" />
        </picture>
        <div class="resto__info">
            <h3 tabindex="0"> Alamat</h3>
            <p tabindex="0">${resto.address || '-'} (${resto.city || '-'})</p>
            <h3 tabindex="0"> Deskripsi</h3>
            <p tabindex="0">${resto.description}</p>
            <div class="row">
            <h3 tabindex="0">Menu Makanan</h3>
            ${resto.menus.foods.map((food) => `
            <li tabindex="0">
                ${food.name}
            </li>
            `).join('')}
            <h3 tabindex="0">Menu Minuman</h3>
            ${resto.menus.drinks.map((drink) => `
            <li tabindex="0">
                ${drink.name}
            </li>
            `).join('')}
            </div>
            <h3 tabindex="0">Ulasan</h3>
            ${resto.customerReviews.map((review) => `
                <div class="card">
                    <h5 tabindex="0">${review.name}</h5>
                    <p tabindex="0" class="date-review">${review.date}</p>
                    <p tabindex="0">${review.review}</p>
                </div>
            `).join('')}
        </div>
    `;

const createRestoItemTemplate = (resto) => `
      <div class="resto-item">
        <div class="resto-item__header">
        <picture>
        <source media="(max-width: 600px)" data-srcset="${CONFIG.BASE_SMALL_IMAGE_URL + resto.pictureId} type="image/jpeg">
        <img class="lazyload" alt="${resto.name || '-'}"
                data-src="${resto.pictureId ? CONFIG.BASE_IMAGE_URL + resto.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
        </picture>
        </div>
        <div class="resto-item__content">
            <h3 class="resto__name"><a href="${`/#/detail/${resto.id}`}">${resto.name || '-'}</a> </h3>
            <h4>Rating : ⭐️<span class="resto-item__header__rating__score">${resto.rating || '-'}</span></h4>
            <h4>${resto.city || '-'}</h4>
            <p>${resto.description || '-'}</p>
        </div>
      </div>
      `;

const createLikeButtonTemplate = () => `
      <button aria-label="menyukai resto ini" id="likeButton" class="like">
         <i class="fa fa-heart-o" aria-hidden="true"></i>
      </button>
    `;

const createLikedButtonTemplate = () => `
      <button aria-label="batal menyukai resto ini" id="likeButton" class="like">
        <i class="fa fa-heart" aria-hidden="true"></i>
      </button>
    `;
export {
  createRestoItemTemplate, createRestoDetailTemplate, createLikeButtonTemplate,
  createLikedButtonTemplate,
};
