import { getHtml } from "../shared/util.js";

export default class AppMenu extends HTMLElement {    
    constructor() {
      super();
    }
    
    connectedCallback() {
      this.setTemplate();
    }
  
    async setTemplate() {
      const template = await getHtml("kanzariya-app/app-menu/app-menu.html");
      this.innerHTML = template;
    }  
  }

  // Register component to window
window.customElements.define('app-menu', AppMenu);


  console.log("in >>> app.js");