/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import 'regenerator-runtime'; /* for async await transpile */
// import '../styles/main.css';
import '../styles/style.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

// let result = '';
// eslint-disable-next-line array-callback-return
// data.restaurants.map((resto) => {
//   result += `
//         <div class="card">
//             <img tabindex="0" src="${resto.pictureId}" alt="${resto.name}">
//             <div class="row">
//                 <h3 tabindex="0">Rating: ${resto.rating}</h3>
//                 <h4 tabindex="0">${resto.city}</h4>
//                 </div>
//               <div>
//                 <h2 tabindex="0"><a href="#">${resto.name}</a></h2>
//                 <p tabindex="0">${resto.description}</p>
//             </div>
//         </div>
//         `;
//   document.getElementById('show-card').innerHTML = result;
// });
