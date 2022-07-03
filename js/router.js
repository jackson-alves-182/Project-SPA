export class Router {

  routes = {}

  add(routName, page){
    this.routes[routName] = page;
  }


  route(event){
    event = event || window.event;
    event.preventDefault();

    window.history.pushState({}, "", event.target.href);

    console.log(window.history);

    this.handle();
  }

  handle(){
    const pathname = window.location.pathname;
    
    const route = this.routes[pathname] || this.routes['/'];

    fetch(route).then(data => data.text()).then(html =>{
      document.querySelector('#content').innerHTML = html; 

      if(pathname == '/'){
        backgroundHome();
      }
      else if(pathname == "/universe" ){
        backgroundUniverse();
      }
      else if (pathname == "/exploration"){
        backgroundExploration();
      }
    })
  }
} 

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