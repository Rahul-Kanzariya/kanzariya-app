import { getHtml } from "../../shared/util.js";

export default class Calculator extends HTMLElement {
    template = document.createElement('template');
    constructor() {
      super();
      this.setHtml();
    }

  async setHtml() {
      const filePath = {
        html : "kanzariya-app/pages/calculator/calculator.html",
        css : "kanzariya-app/pages/calculator/calculator.css"
      }
      const template = await getHtml(filePath.html, filePath.css);
      this.template.innerHTML = template; 
      this.attachShadow({ mode: 'open'});
      this.shadowRoot.appendChild(this.template.content.cloneNode(true));
    }

    connectedCallback(){
        this.h3 = this.getAttribute("name");
    }
  }

  // Register component to window
window.customElements.define('app-calculator', Calculator);
