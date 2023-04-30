export default class AppMenu extends HTMLElement {
    // get email() {
    //   return this.hasAttribute('email');
    // }
    
    constructor() {
      super();
    }
    
    connectedCallback(){
    this.innerHTML = `
        <nav class="app-menu" role="navigation">            
            <ul>
                <li><a href="#"></a>Skills</li>
                <li><a href="#"></a>About Me</li>
                <li><a href="#">Projects</a></li>   
                <li><button onclick="toggleMenu()" >close</button></li>   
            </ul>
        </nav>`
    }
    
  }

  // Register component to window
window.customElements.define('app-menu', AppMenu);


  console.log("in >>> app.js");