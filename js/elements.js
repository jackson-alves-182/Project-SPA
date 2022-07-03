const navHome = document.querySelector('#home');
const navUniverse = document.querySelector('#universe');
const navExploration = document.querySelector('#exploration');

const buttonOpenMenu = document.querySelector('.open-menu');
const buttonCloseMenu = document.querySelector('.close-menu');
const menuNavi = document.querySelector('#menu-header');


function backgroundHome(){
  document.querySelector('body').className = "";
  document.querySelector('body').classList.add('home');
}
function backgroundUniverse(){
  document.querySelector('body').className = "";
  document.querySelector('body').classList.add('universe');
}
function backgroundExploration(){
  document.querySelector('body').className = "";
  document.querySelector("body").classList.add('exploration');
}

export{
  navHome,
  navUniverse,
  navExploration,
  buttonOpenMenu,
  buttonCloseMenu,
  menuNavi,
  backgroundHome,
  backgroundUniverse,
  backgroundExploration
}