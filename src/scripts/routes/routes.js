import Home from '../views/pages/home';
import About from '../views/pages/about';
import Favorite from '../views/pages/favorite';
import Detail from '../views/pages/detail';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/about': About,
  '/favorite': Favorite,
  '/detail/:id': Detail,
};

export default routes;
