/* eslint-disable eqeqeq */
/* eslint-disable consistent-return */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-return-assign */
/* eslint-disable no-undef */
import { itActsAsFavoriteRestoModel } from './contract/favoriteRestoContract';

let favoriteRestaurants = [];

const FavoriteRestoArray = {

  getResto(id) {
    if (!id) {
      return;
    }

    return favoriteRestaurants.find((resto) => resto.id == id);
  },

  getAllRestaurants() {
    return favoriteRestaurants;
  },

  putResto(resto) {
    if (!resto.hasOwnProperty('id')) {
      return;
    }

    // pastikan id ini belum ada dalam daftar favoriteRestaurants
    if (this.getResto(resto.id)) {
      return;
    }

    favoriteRestaurants.push(resto);
  },

  deleteResto(id) {
    // cara boros menghapus resto dengan meng-copy resto yang ada
    // kecuali resto dengan id == id
    favoriteRestaurants = favoriteRestaurants.filter((resto) => resto.id != id);
  },

  searchRestaurants(query) {
    return this.getAllRestaurants()
      .filter((resto) => {
        const loweredCaseRestoName = (resto.name || '-').toLowerCase();
        const jammedRestoName = loweredCaseRestoName.replace(/\s/g, '');

        const loweredCaseQuery = query.toLowerCase();
        const jammedQuery = loweredCaseQuery.replace(/\s/g, '');

        return jammedRestoName.indexOf(jammedQuery) != -1;
      });
  },
};

describe('Favorite Resto Array Contract Test Implementation', () => {
  afterEach(() => favoriteRestaurants = []);

  itActsAsFavoriteRestoModel(FavoriteRestoArray);
});
