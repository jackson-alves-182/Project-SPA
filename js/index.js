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
})

navUniverse.addEventListener('click', function(){
  router.route();

})

navExploration.addEventListener('click', function(){
  router.route();
})


router.handle();
window.onpopstate = () => router.handle();
window.route = () => router.route();


