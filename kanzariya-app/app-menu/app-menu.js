import { getHtml } from "../shared/util.js";

export default class AppMenu extends HTMLElement {    
    constructor() {
      super();
    }
    
    connectedCallback() {
      this.setTemplate();
    }
  
    async setTemplate() {
      const path ={ 
        html :"kanzariya-app/app-menu/app-menu.html",
        css :"kanzariya-app/app-menu/app-menu.css"
     }
      const template = await getHtml(path.html,path.css);
      this.innerHTML = template;
    }  
  }

  // Register component to window
window.customElements.define('app-menu', AppMenu);


  console.log("in >>> app.js");