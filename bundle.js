import KanzariyaApp from "./kanzariya-app/kanzariya-app.js";
import AppMenu from "./kanzariya-app/app-menu/app-menu.js";
import AboutMe from "./kanzariya-app/pages/about-me/about-me.js";
import Projects from "./kanzariya-app/pages/projects/projects.js";
import Skills from "./kanzariya-app/pages/skills/skills.js";
import EmployeeCard from "./kanzariya-app/employee-card/employee-card.js";
import AppHeader from "./kanzariya-app/app-header/app-header.js";
import Calculator from "./kanzariya-app/pages/calculator/calculator.js";

// Register component to window
window.customElements.define('kanzariya-app', KanzariyaApp);
window.customElements.define('app-menu', AppMenu);
window.customElements.define('about-me', AboutMe);
window.customElements.define('my-projects', Projects);
window.customElements.define('my-skills', Skills);
window.customElements.define('employee-card', EmployeeCard);
window.customElements.define('app-header', AppHeader);
window.customElements.define('app-calculator', Calculator);

