import { getHtml } from "../shared/util.js";

export default class EmployeeCard extends HTMLElement {
    template = document.createElement('template');
    constructor() {
      super();
      this.setHtml();
    }

  async setHtml() {
      const filePath = {
        html : "kanzariya-app/employee-card/employee-card.html",
        css : "kanzariya-app/employee-card/employee-card.css"
      }
      const template = await getHtml(filePath.html, filePath.css);
      this.template.innerHTML = template; 
      this.attachShadow({ mode: 'open'});
      this.shadowRoot.appendChild(this.template.content.cloneNode(true));
      this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
    }

    connectedCallback(){
        this.h3 = this.getAttribute("name");
        this.render();
    }
    
    render(){
      // this.querySelector('h3').innerText = this.getAttribute('name');
    }
  }