import { getHtml } from "../../shared/util.js";

export default class Calculator extends HTMLElement {
  template = document.createElement('template');
  operatorList = ["+", "-", "/", "*", "%"];
  equalClicked = false;

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
          this.handlePercent("%");
          break;
      
        case 'devide':
          this.handleDevide("/");
          break;
      
        case 'multiple':
          this.handleMultiple("*");
          break;
      
        case 'substract':
          this.handleSubstract("-");
          break;
      
        case 'add':
          this.handleAdd("+");
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
    this.shadowRoot.querySelector('.exp-result-display').innerHTML = "";
    this.equalClicked = false;
    this.toggleDisplays();
  }

  handleClear(button){
    const displayValue = this.shadowRoot.querySelector('.expression-display').innerHTML
    if(this.equalClicked){
      this.toggleDisplays();
      this.equalClicked = false;
    }

    if(displayValue && displayValue.length > 0){
      this.shadowRoot.querySelector('.expression-display').innerHTML = displayValue.slice(0, -1);
      this.handleExpressResult(displayValue.slice(0, -1))
    }
  }

  handleAdd(sign){
    const displayValue = this.shadowRoot.querySelector('.expression-display').innerHTML
    const isAlreadyOp = this.isMultiOPClick(displayValue)
    if(this.equalClicked){
      this.handleOpAfterEqualClicked(sign);
      return;
    }
    if(!isAlreadyOp && displayValue && displayValue.length > 0){
      this.shadowRoot.querySelector('.expression-display').innerHTML = displayValue + sign;
    }
  }

  handleSubstract(sign){
    const displayValue = this.shadowRoot.querySelector('.expression-display').innerHTML
    const isAlreadyOp = this.isMultiOPClick(displayValue)
    if(this.equalClicked){
      this.handleOpAfterEqualClicked(sign);
      return;
    }
    if(!isAlreadyOp && displayValue && displayValue.length > 0){
      this.shadowRoot.querySelector('.expression-display').innerHTML = displayValue + sign;
    }
  }

  handleMultiple(sign){
    const displayValue = this.shadowRoot.querySelector('.expression-display').innerHTML
    const isAlreadyOp = this.isMultiOPClick(displayValue)
    if(this.equalClicked){
      this.handleOpAfterEqualClicked(sign);
      return;
    }
    if(!isAlreadyOp && displayValue && displayValue.length > 0){
      this.shadowRoot.querySelector('.expression-display').innerHTML = displayValue + sign;
    }
  }

  handleDevide(sign){
    const displayValue = this.shadowRoot.querySelector('.expression-display').innerHTML
    const isAlreadyOp = this.isMultiOPClick(displayValue)
    if(this.equalClicked){
      this.handleOpAfterEqualClicked(sign);
      return;
    }
    if(!isAlreadyOp && displayValue && displayValue.length > 0){
      this.shadowRoot.querySelector('.expression-display').innerHTML = displayValue + sign;
    }
  }

  handlePercent(sign){
    const displayValue = this.shadowRoot.querySelector('.expression-display').innerHTML
    const isAlreadyOp = this.isMultiOPClick(displayValue)
    if(this.equalClicked){
      this.handleOpAfterEqualClicked(sign);
      return;
    }
    if(!isAlreadyOp && displayValue && displayValue.length > 0){
      this.shadowRoot.querySelector('.expression-display').innerHTML = displayValue + sign;
    }
  }

  handleEqual(button){
    const displayValue = this.shadowRoot.querySelector('.expression-display').innerHTML
    const resultDisplayValue = this.shadowRoot.querySelector('.exp-result-display').innerHTML
    if(displayValue && resultDisplayValue && !this.equalClicked){
      this.toggleDisplays();
      this.equalClicked = true;
    }
  }

  handleExpressResult(displayValue){
    if(!displayValue)return this.handleAllClear(displayValue);
    if(displayValue && this.operatorList.includes(displayValue.slice(-1))){
      this.shadowRoot.querySelector('.exp-result-display').innerHTML = "";
      return
    }
    let isMathOperatorIncludes = false;
    this.operatorList.forEach((op) => {
        if (displayValue.includes(op)) {
          isMathOperatorIncludes = true;
        }
    });

    if (isMathOperatorIncludes) {
      const resultExpression = eval(displayValue);
      this.shadowRoot.querySelector('.exp-result-display').innerHTML = resultExpression;
    }
  }

  handleOpAfterEqualClicked(sign){
      const displayValue = this.shadowRoot.querySelector('.expression-display').innerHTML
      const resultDisplayValue = this.shadowRoot.querySelector('.exp-result-display').innerHTML
      this.toggleDisplays(); 
      this.shadowRoot.querySelector('.exp-result-display').innerHTML = '';
      this.shadowRoot.querySelector('.expression-display').innerHTML = resultDisplayValue + sign;
      this.equalClicked = false;
  }

  connectedCallback() {
    this.h3 = this.getAttribute("name");
  }

  isMultiOPClick(displayValue){
    return displayValue && this.operatorList.includes(displayValue.slice(-1))
  }

  toggleDisplays(){
    this.shadowRoot.querySelector('.expression-display').classList.toggle('big-Display');
    this.shadowRoot.querySelector('.exp-result-display').classList.toggle('big-Display');
  }
}

// Register component to window
window.customElements.define('app-calculator', Calculator);
