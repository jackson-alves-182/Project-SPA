import{
  backgroundHome,
  backgroundUniverse,
  backgroundExploration
} from './elements.js'

export class Router {
  routes = {}

  add(routName, page){
    this.routes[routName] = page;
  }

  route(event){
    event = event || window.event;
    console.log(event);
    event.preventDefault();

    window.history.pushState({}, "", event.target.href);
    console.log(event.target.href);

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

      

      let nops = fetch('https://placekitten.com/386/508?image=').then(data => data.innerHTML)

      console.log(nops);
    })
  }
} 
