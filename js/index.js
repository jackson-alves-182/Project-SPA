import { Router } from './router.js'
import{
  navHome,
  navUniverse,
  navExploration
} from './elements.js'

const router = new Router();

router.add('/',  "./pages/home.html");
router.add("/universe", "./pages/universe.html");
router.add("/exploration", "/pages/exploration.html");


navHome.addEventListener('click', function(){
  router.route();

  document.querySelector('body').className = "";
  document.querySelector('body').classList.add('home');

})

navUniverse.addEventListener('click', function(){
  router.route();

  document.querySelector('body').className = "";
  document.querySelector('body').classList.add('universe');
})

navExploration.addEventListener('click', function(){
  router.route();

  document.querySelector('body').className = "";
  document.querySelector("body").classList.add('exploration');
})


router.handle();



