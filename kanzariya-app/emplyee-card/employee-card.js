export default class EmployeeCard extends HTMLElement {
    template;
    constructor() {
      super();
      this.setHtml();
    }
    
    createTemplate(pageHtml,pageCSS){
        this.template = document.createElement('template');
        this.template.innerHTML = `
        <style>${pageCSS}</style>
        ${pageHtml}
        `
    }

  async setHtml() {
    const pageHtml = await this.getFileText("kanzariya-app/emplyee-card/employee-card.html");
    const pageCSS = await this.getFileText("kanzariya-app/emplyee-card/employee-card.css");
    if(pageHtml && pageHtml.length && pageCSS && pageCSS.length){
      this.createTemplate(pageHtml,pageCSS);
      this.attachShadow({ mode: 'open'});
      this.shadowRoot.appendChild(this.template.content.cloneNode(true));
      this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
    }

  }

  async getFileText(fileUrl) {
    // console.log('getFileText: ');
    const text = await (await fetch(fileUrl)).text();
    // console.log('text: getFileText >>> ', text);
    return text;
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