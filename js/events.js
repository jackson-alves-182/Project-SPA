import{
  navHome,
  navUniverse,
  navExploration,
  buttonOpenMenu,
  buttonCloseMenu,
  menuNavi
} from './elements.js'

const buttonKnow = document.querySelector('.nops');

export default function({router}){
  buttonOpenMenu.addEventListener('click', function(){
    menuNavi.style.display = 'flex';

    buttonOpenMenu.classList.add('hide');
    buttonCloseMenu.classList.remove('hide');
  })

  buttonCloseMenu.addEventListener('click', function(){
    menuNavi.style.display = 'none';

    buttonOpenMenu.classList.remove('hide');
    buttonCloseMenu.classList.add('hide');
  })

  navHome.addEventListener('click', function(){
    router.route();
  })

  navUniverse.addEventListener('click', function(){
    router.route();
  })

  navExploration.addEventListener('click', function(){
    router.route();
  })
 
}