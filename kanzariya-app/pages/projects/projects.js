import { getHtml } from "../../shared/util.js";

export default class Projects extends HTMLElement {
    template = document.createElement('template');
    constructor() {
      super();
      this.setHtml();
    }

  async setHtml() {
      const filePath = {
        html : "kanzariya-app/pages/projects/projects.html",
        css : "kanzariya-app/pages/projects/projects.css"
      }
      const template = await getHtml(filePath.html, filePath.css);
      this.template.innerHTML = template; 
      this.attachShadow({ mode: 'open'});
      this.shadowRoot.appendChild(this.template.content.cloneNode(true));

      const uploadedAudio = this.shadowRoot.getElementById("audio-upload");
      // console.log('uploadedAudio: ', uploadedAudio);
      if(uploadedAudio)uploadedAudio.addEventListener("change", this.changeHandler);
    }

    connectedCallback(){
        this.h3 = this.getAttribute("name");
        this.render();
    }
    
    render(){
      // this.querySelector('h3').innerText = this.getAttribute('name');
    }

    changeHandler({
      target
    }) {
      // console.log("changeHandler : target >>>", target);
      // Make sure we have files to use
      if (!target.files.length) return;
    
      // Create a blob that we can use as an src for our audio element
      const urlObj = URL.createObjectURL(target.files[0]);
    
      // Create an audio element
      const audio = document.createElement("audio");
    
      // Clean up the URL Object after we are done with it
      audio.addEventListener("load", () => {
        URL.revokeObjectURL(urlObj);
      });
    
      // Append the audio element
      document.body.appendChild(audio);
    
      // Allow us to control the audio
      audio.controls = "true";
    
      // Set the src and start loading the audio from the file
      audio.src = urlObj;
    } 
  }