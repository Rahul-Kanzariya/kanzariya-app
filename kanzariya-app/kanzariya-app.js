import Router from "../router.js";
import { getHtml } from "./shared/util.js";

export default class KanzariyaApp extends HTMLElement {
  constructor() {
    super();
    this.setTemplate();
  }

  connectedCallback() {
  }

  async setTemplate() {
    const template = await getHtml("kanzariya-app/kanzariya-app.html");
    // console.log('template: KanzariyaApp >>>', template);
    this.innerHTML = template;
    if(template.includes("<route-outlate></route-outlate>")){
      this.setRouter();
    }
  }

  renderRoutePage(pageTag){
    const routeOutlateEle = document.querySelector('kanzariya-app route-outlate');
    // console.log('routeOutlateEle: renderRoutePage', routeOutlateEle);
    if(routeOutlateEle && pageTag){
      routeOutlateEle.innerHTML = pageTag
    }
    
  }

  setRouter(){
    // Create a new router instance
    const router = new Router();
  
    const routes = [
      {
        path:"#about-me", component:"<about-me></about-me>"
      },
      {
        path:"#skills", component:"<my-skills></my-skills>"
      },
      {
        path:"#projects", component:"<my-projects></my-projects>"
      },
      {
        path:"#calculator", component:"<app-calculator></app-calculator>"
      },
    ];

    // Define some routes and callbacks
    routes.forEach((route)=>{
      router.get(route.path,()=>{
        console.log('route.path: ', route.path);
        this.updateSeletedMenu(route);
        // render Route Page template
        this.renderRoutePage(route.component);   
      })
    })
      
    // Initialize the router
    router.init();
  
    // Listen for hash changes
    window.addEventListener("hashchange", function () {
      console.log("hashchange event listeners log");
      router.init();
    });  
  }

  updateSeletedMenu(route){
    const appMenuEle = document.querySelector('app-menu');
    if(appMenuEle && route){
      appMenuEle.setAttribute("Page",route.path)
    }
  }
}


