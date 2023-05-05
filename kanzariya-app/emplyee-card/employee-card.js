import { getHtml } from "../shared/util";

export default class EmployeeCard extends HTMLElement {
    template;
    constructor() {
      super();
      this.setHtml();
    }

  async setHtml() {
      const filePath = {
        html : "kanzariya-app/emplyee-card/employee-card.html",
        css : "kanzariya-app/emplyee-card/employee-card.html"
      }
      const template = getHtml(filePath.html, filePath.css);
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
      this.querySelector('h3').innerText = this.getAttribute('name');
    }
  }

  // Register component to window
window.customElements.define('employee-card', EmployeeCard);


  console.log("in >>> app.js");