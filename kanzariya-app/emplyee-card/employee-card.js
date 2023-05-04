export default class EmployeeCard extends HTMLElement {
    template;
    constructor() {
      super();
      // this.createTemplate();
      // this.attachShadow({ mode: 'open'});
      // this.shadowRoot.appendChild(this.template.content.cloneNode(true));
      // this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
    }
    
    createTemplate(){
        this.template = document.createElement('template');
        this.template.innerHTML = `
        <style>
        <style>
          .employee-card {
            font-family: sans-serif;
            background: #f4f6f7;
            width: 250px;
            display: grid;
            grid-template-columns: 1fr;
            margin-bottom: 10px;
          }
        
        </style>
        <div class="employee-card">
          <img/>
          <div>
            <h3 class="card-name"></h3>
            <div class="details">
              <p><slot name="id"/></p>
              <p><slot name="job title"/></p>
              <p><slot name="email"/></p>
              <p><slot name="phone"/></p>
            </div>
          </div>
        </div>
        `

    }

    connectedCallback(){
        // this.h3 = this.getAttribute("name");
        this.innerHTML = `
        <style>
        <style>
          .employee-card {
            font-family: sans-serif;
            background: #f4f6f7;
            width: 250px;
            display: grid;
            grid-template-columns: 1fr;
            margin-bottom: 10px;
          }
        
        </style>
        <div class="employee-card">
          <img/>
          <div>
            <h3 class="card-name"></h3>
            <div class="details">
              <p><slot name="id"/></p>
              <p><slot name="job title"/></p>
              <p><slot name="email"/></p>
              <p><slot name="phone"/></p>
            </div>
          </div>
        </div>
        `
        this.render();
    }
    
    render(){
      this.querySelector('h3').innerText = this.getAttribute('name');
    }
  }

  // Register component to window
window.customElements.define('employee-card', EmployeeCard);


  console.log("in >>> app.js");