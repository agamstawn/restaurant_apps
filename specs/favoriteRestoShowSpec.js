import FavoriteRestoSearchView
  from '../src/scripts/views/pages/favorite-restaurants/favorite-resto-search-view';
import FavoriteRestoShowPresenter
  from '../src/scripts/views/pages/favorite-restaurants/favorite-resto-show-presenter';
import FavoriteRestoIdb from '../src/scripts/data/favorite-resto-idb';

describe('Showing all favorite restaurants', () => {

  let view;
  const renderTemplate = () => {
    view = new FavoriteRestoSearchView();
    document.body.innerHTML = view.getTemplate();
  };

  beforeEach(() => {
    renderTemplate();
  });

    describe('When no restaurants have been liked', () => {
      it('should ask for the favorite restaurants', () => {
        const favoriteRestaurants = spyOnAllFunctions(FavoriteRestoIdb);

        new FavoriteRestoShowPresenter({
          view,
          favoriteRestaurants,
        });

        expect(favoriteRestaurants.getAllRestaurants).toHaveBeenCalledTimes(1);
      });

      it('should show the information that no restaurants have been liked', (done) => {
        document.getElementById('restaurants').addEventListener('restaurants:updated', () => {
          expect(document.querySelectorAll('.resto-item__not__found').length)
            .toEqual(1);

          done();
        });

        const favoriteRestaurants = spyOnAllFunctions(FavoriteRestoIdb);
        favoriteRestaurants.getAllRestaurants.and.returnValues([]);

        new FavoriteRestoShowPresenter({
          view,
          favoriteRestaurants,
        });
      });
    });

    describe('When favorite restaurants exist', () => {
      it('should show the restaurants', (done) => {
        document.getElementById('restaurants').addEventListener('restaurants:updated', () => {
          expect(document.querySelectorAll('.resto-item').length).toEqual(2);
          done();
        });

        const favoriteRestaurants = spyOnAllFunctions(FavoriteRestoIdb);
        favoriteRestaurants.getAllRestaurants.and.returnValues([
          {
            id: 11, title: 'A', vote_average: 3, overview: 'Sebuah resto A',
          },
          {
            id: 22, title: 'B', vote_average: 4, overview: 'Sebuah resto B',
          },
        ]);

        new FavoriteRestoShowPresenter({
          view,
          favoriteRestaurants,
        });
      });
    });
  });