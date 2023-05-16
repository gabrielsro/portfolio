import "./projectsPageStyle.css";
import { Clock } from "three";
const main = document.querySelector("main");
const projectsPage = {
  generateContent() {
    let titleContainer = document.createElement("div");
    let title = document.createElement("h1");
    title.innerText = "Projects";
    titleContainer.appendChild(title);
    let projectsContainer = document.createElement("div");
    let project1 = document.createElement("h2");
    project1.innerText = "esdepolitologos.com";
    let project2 = document.createElement("h2");
    project2.innerText = "Carfast App";
    let project3 = document.createElement("h2");
    project3.innerText = "Weather App";
    projectsContainer.appendChild(project1);
    projectsContainer.appendChild(project2);
    projectsContainer.appendChild(project3);
    main.appendChild(titleContainer);
    main.appendChild(projectsContainer);
  },
  animate(wapp, edp, cfst, pCoord) {
    projectsAnimations(wapp, edp, cfst, pCoord);
  },
};

function projectsAnimations(wapp, edp, cfst, pCoord) {
  let coordinates = pCoord;
  let clock = new Clock();
  function animateWapp() {
    window.requestAnimationFrame(animateWapp);
    wapp.position.x = Math.cos(clock.getElapsedTime() * 0.5 + Math.PI) * 7;
    wapp.position.z = Math.sin(-1 * clock.getElapsedTime() * 0.5 + Math.PI) * 7;
  }
  function animateEdp() {
    window.requestAnimationFrame(animateEdp);
    edp.position.x = Math.cos(clock.getElapsedTime() * 0.7 + Math.PI) * 8;
    edp.position.z = Math.sin(-1 * clock.getElapsedTime() * 0.7 + Math.PI) * 8;
  }
  function animateCfst() {
    window.requestAnimationFrame(animateCfst);
    cfst.position.x = Math.cos(clock.getElapsedTime() + Math.PI) * 9;
    cfst.position.z = Math.sin(-1 * clock.getElapsedTime() + Math.PI) * 9;
  }
  animateWapp();
  animateEdp();
  animateCfst();
}

export { projectsPage };
