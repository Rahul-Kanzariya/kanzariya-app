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
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(this.template.content.cloneNode(true));

    const btnList = this.shadowRoot.querySelectorAll('.grid-item');
    btnList.forEach((btn) => {
      btn.addEventListener('click', ()=>this.handlebuttonClick(btn))
    })
  }

  handlebuttonClick(button){
    const type = button.getAttribute('type');
    // console.log('type: ', type);
    if(type){
      switch (type) {
        case 'number':
          this.handleNumberClick(button);
          break;
      
        case 'all-clear':
          this.handleAllClear(button);
          break;
      
        case 'clear':
          this.handleClear(button);
          break;
      
        case 'percent':
          this.handlePercent(button);
          break;
      
        case 'devide':
          this.handleDevide(button);
          break;
      
        case 'multiple':
          this.handleMultiple(button);
          break;
      
        case 'substract':
          this.handleSubstract(button);
          break;
      
        case 'add':
          this.handleAdd(button);
          break;
      
        case 'dot':
          this.handleDot(button);
          break;
      
        case 'equal':
          this.handleEqual(button);
          break;
      
        default:
          break;
      }
    }
  }

  handleNumberClick(button){
    const number = button.getAttribute('number');
    // console.log('number: ', number);
    const displayValue = this.shadowRoot.querySelector('.expression-display').innerHTML;
    if(displayValue){
      this.shadowRoot.querySelector('.expression-display').innerHTML = displayValue + number;
      this.handleExpressResult(displayValue + number);
    }else{
      this.shadowRoot.querySelector('.expression-display').innerHTML = displayValue + number;
    }

  }

  handleDot(button){
    const number = button.getAttribute('number');
    const displayValue = this.shadowRoot.querySelector('.expression-display').innerHTML;
    if(displayValue){
      if(displayValue.includes('.')){
        console.log("can not use more than one time");
      }else{
        this.shadowRoot.querySelector('.expression-display').innerHTML = displayValue + number;
      }
    }else{
      this.shadowRoot.querySelector('.expression-display').innerHTML = '0' + number;
    }
  }

  handleAllClear(button){
    this.shadowRoot.querySelector('.expression-display').innerHTML = "";
  }

  handleClear(button){
    const displayValue = this.shadowRoot.querySelector('.expression-display').innerHTML
    if(displayValue && displayValue.length > 0){
      this.shadowRoot.querySelector('.expression-display').innerHTML = displayValue.slice(0, -1);
    }
  }

  handleAdd(button){
    const displayValue = this.shadowRoot.querySelector('.expression-display').innerHTML
    if(displayValue && displayValue.length > 0){
      this.shadowRoot.querySelector('.expression-display').innerHTML = displayValue + '+';
    }
  }

  handleEqual(button){
    const displayValue = this.shadowRoot.querySelector('.expression-display').innerHTML
    if(displayValue && displayValue.length > 0){
      this.shadowRoot.querySelector('.expression-display').innerHTML = displayValue + '+';
    }
  }

  handleExpressResult(displayValue){
    const operatorList = ["+", "-", "/", "*", "%"];
    let isMathOperatorIncludes = false;
    operatorList.forEach((op) => {
        if (displayValue.includes(op)) {
          isMathOperatorIncludes = true;
        }
    });

    if (isMathOperatorIncludes) {
      const resultExpression = eval(displayValue);
      this.shadowRoot.querySelector('.exp-result-display').innerHTML = resultExpression;
    }
  }

  connectedCallback() {
    this.h3 = this.getAttribute("name");
  }
}

// Register component to window
window.customElements.define('app-calculator', Calculator);
