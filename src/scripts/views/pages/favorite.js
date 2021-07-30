import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import FavoriteRestoSearchView from './favorite-restaurants/favorite-resto-search-view';
import FavoriteRestoShowPresenter from './favorite-restaurants/favorite-resto-show-presenter';
import FavoriteRestoSearchPresenter from './favorite-restaurants/favorite-resto-search-presenter';

const view = new FavoriteRestoSearchView();

const Favorite = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new FavoriteRestoShowPresenter({ view, favoriteRestaurants: FavoriteRestoIdb });
    new FavoriteRestoSearchPresenter({ view, favoriteRestaurants: FavoriteRestoIdb });
  },
};

export default Favorite;
