import RestoDB from '../../data/resto-db';
import { createRestoItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <section class="hero" id="maincontent">
        <div class="hero-inner">
            <h1>Ayo makan sehat</h1>
            <h2>Penuhi nutrisi, dengan makanan sehat!</h2>
        </div>
    </section>
    <div class="content">
          <main id="mainContent">
                <div class="row text-center">
                  <h2 tabindex="0">Explore Restaurant</h2>
                </div>
                <!-- render array -->
                <div class="restaurants" id="restaurants"></div>
           </main>
    </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestoDB.listRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((resto) => {
      restaurantsContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default Home;
