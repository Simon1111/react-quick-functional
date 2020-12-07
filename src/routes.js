import Home from './components/pages/Home.js';
import About from './components/pages/About.js';
import Blog from './components/pages/Blog.js';
import Error from './components/pages/Error.js';

export default [
  {
    uid: "route-1",
    path: "/",
    showMain: true,
    name: "Home",
    component: Home
  },
  {
    uid: "route-2",
    path: "/about",
    showMain: true,
    name: "About",
    component: About
  },
  {
    uid: "route-3",
    path: "/404",
    showMain: false,
    name: "Error",
    component: Error
  },
  {
    uid: "route-4",
    path: "/blog",
    showMain: true,
    name: "Blog",
    component: Blog
  }
];