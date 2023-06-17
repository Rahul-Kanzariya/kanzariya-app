import { getHtml } from "../../shared/util.js";

export default class Projects extends HTMLElement {
  template = document.createElement('template');
  constructor() {
    super();
    this.setHtml();
  }

  async setHtml() {
    const filePath = {
      html: "kanzariya-app/pages/projects/projects.html",
      css: "kanzariya-app/pages/projects/projects.css"
    }
    const template = await getHtml(filePath.html, filePath.css);
    this.template.innerHTML = template;
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(this.template.content.cloneNode(true));

    const uploadedAudio = this.shadowRoot.getElementById("audio-upload");
    // console.log('uploadedAudio: ', uploadedAudio);
    if (uploadedAudio) uploadedAudio.addEventListener("change", this.changeHandler.bind(this));
  }

  connectedCallback() {
    this.h3 = this.getAttribute("name");
    this.render();
  }

  render() {
    // this.querySelector('h3').innerText = this.getAttribute('name');
  }

  handleUploadedAudio(files) {
    if (files && files.length) {
      let audiolistTemplate = document.createElement('ul');

      let count = 0;
      while (count < files.length) {
        const currentFile = files[count];
        const currentFileLi = document.createElement('li');
        currentFileLi.innerText = currentFile.audioFile.name;
        currentFileLi.setAttribute('audioId', currentFile.audioId);
        audiolistTemplate.appendChild(currentFileLi.cloneNode(true));
        count++;
      }
      this.shadowRoot.querySelector('.audio-list').appendChild(audiolistTemplate.cloneNode(true));

      const listEleArray = this.shadowRoot.querySelectorAll('.audio-list li');

      for (let i = 0; i < listEleArray.length; i++) {
        listEleArray[i].addEventListener("click", (event) => {
          const targetAudioFileId = event.target.getAttribute('audioId');
          const targetAudioFile = files.find(file => file.audioId == targetAudioFileId)
          

          // Create a blob that we can use as an src for our audio element
          const urlObj = URL.createObjectURL(targetAudioFile.audioFile);
          // Create an audio element
          const audio = document.createElement("audio");

          // Clean up the URL Object after we are done with it
          audio.addEventListener("load", () => {
            URL.revokeObjectURL(urlObj);
          });

          // Append the audio element
          // document.body.appendChild(audio);
          this.shadowRoot.querySelector('.audio-display').innerHTML = '';
          this.shadowRoot.querySelector('.audio-display').appendChild(audio);

          // Allow us to control the audio
          audio.controls = "true";

          // Set the src and start loading the audio from the file
          audio.src = urlObj;

        });
      }
    }
  }

  changeHandler({ target }) {
    // Make sure we have files to use
    if (!target.files.length) return;

    let audioStore = [];
    let count = 0;
    while (count < target.files.length) {
      const audioObj = { audioId: null, audioFile: null }
      audioObj.audioId = "id" + Math.random().toString(16).slice(2);
      audioObj.audioFile = target.files[count];
      audioStore.push(audioObj);

      count++;
    }

    // Audio file name
    this.handleUploadedAudio(audioStore);

  }
}