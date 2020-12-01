import Home from './pages/Home.js';
import About from './pages/About.js';
import Error from './pages/Error.js';

export default [{
  path: "/",
  showMain: true,
  name: "Home",
  component: Home
},{
  path: "/about",
  showMain: true,
  name: "About",
  component: About
},{
  path: "/404",
  showMain: false,
  name: "Error",
  component: Error
}];