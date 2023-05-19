import { getHtml } from "../shared/util.js";

export default class AppMenu extends HTMLElement {    
    constructor() {
      super();
    }
    
    connectedCallback() {
      this.setTemplate();
    }

    static observedAttributes = ["page"];

    attributeChangedCallback(){
      const page = this.getAttribute("page")
      this.updateMenu(page)
    }

    static get observedAttributes(){
      return ["page"];
    }
  
    async setTemplate() {
      const path ={ 
        html :"kanzariya-app/app-menu/app-menu.html",
        css :"kanzariya-app/app-menu/app-menu.css"
      }
      const template = await getHtml(path.html,path.css);
      this.innerHTML = template;
    }  

    updateMenu(page){
      const clickedMenu = this.querySelector(`a[href="${page}"]`);
      const menus = this.querySelectorAll(".sidenav-menu")
      if(menus && menus.length){
        menus.forEach(menu => menu.classList.remove("show"))
      }
      if(clickedMenu)clickedMenu.classList.add("show");
    }
  }

  // Register component to window
window.customElements.define('app-menu', AppMenu);


  // console.log("in >>> app.js");