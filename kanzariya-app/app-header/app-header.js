import { getHtml } from "../shared/util.js";

export default class AppHeader extends HTMLElement {    
    constructor() {
      super();
    }
    
    connectedCallback() {
      this.setTemplate();
    }
  
    async setTemplate() {
      const path ={ 
        html :"kanzariya-app/app-header/app-header.html",
        css :"kanzariya-app/app-header/app-header.css"
     }
      const template = await getHtml(path.html,path.css);
      // console.log('template: ', template);
      this.innerHTML = template;
    }  
  }
