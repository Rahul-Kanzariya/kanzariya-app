import { getHtml } from "./shared/util.js";

export default class KanzariyaApp extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.setTemplate();
  }

  async setTemplate() {
    const template = await getHtml("kanzariya-app/kanzariya-app.html");
    this.innerHTML = template;
  }
}

// Register component to window
window.customElements.define('kanzariya-app', KanzariyaApp);