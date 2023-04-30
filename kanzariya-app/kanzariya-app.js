export default class KanzariyaApp extends HTMLElement {
    // get email() {
    //   return this.hasAttribute('email');
    // }
    
    constructor() {
      super();
    }
    
    connectedCallback(){
        this.innerHTML = `
          <div class="app">
              <app-menu></app-menu>
              <div class="app-container">
                  <employee-card name="rahul-kanzariya"></employee-card>
                  <button id="open-menu" onclick="toggleMenu()">Open menu</button>
              </div>
          </div>  
        `
    }
  }

  // Register component to window
window.customElements.define('kanzariya-app', KanzariyaApp);


  console.log("in >>> app.js");