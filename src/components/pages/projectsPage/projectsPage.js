import "./projectsPageStyle.css";
import { Clock } from "three";
import { Edp } from "../../projects/edp/edp";
import { Cfst } from "../../projects/cfst/cfst";
import { Wapp } from "../../projects/wapp/wapp";
const main = document.querySelector("main");
const projectsPage = {
  generateContent() {
    //Projects page title:
    let titleContainer = document.createElement("div");
    let title = document.createElement("h1");
    title.innerText = "Projects";
    titleContainer.appendChild(title);
    let projectsContainer = document.createElement("div");
    projectsContainer.classList.add("pageContainer");
    projectsContainer.setAttribute("id", "pageContainerProjects");
    //Project 1:
    let project1Title = document.createElement("h2");
    project1Title.innerText = "esdepolitologos.com";
    let project1 = document.createElement("div");
    project1.classList.add("projectContainer");
    project1.appendChild(project1Title);
    project1.appendChild(Edp.generateContent());
    //Project 2:
    let project2Title = document.createElement("h2");
    project2Title.innerText = "CarFast";
    let project2 = document.createElement("div");
    project2.classList.add("projectContainer");
    project2.appendChild(project2Title);
    project2.appendChild(Cfst.generateContent());
    //Project 3:
    let project3Title = document.createElement("h2");
    project3Title.innerText = "Weather App";
    let project3 = document.createElement("div");
    project3.classList.add("projectContainer");
    project3.appendChild(project3Title);
    project3.appendChild(Wapp.generateContent());
    //setup event listeners for each project
    project1Title.addEventListener("click", (e) => handleProjectClick(e));
    project2Title.addEventListener("click", (e) => handleProjectClick(e));
    project3Title.addEventListener("click", (e) => handleProjectClick(e));
    //Pack everything:
    projectsContainer.appendChild(title);
    projectsContainer.appendChild(project1);
    projectsContainer.appendChild(project2);
    projectsContainer.appendChild(project3);
    main.appendChild(projectsContainer);
  },
  animate(wapp, edp, cfst, pCoord) {
    projectsAnimations(wapp, edp, cfst, pCoord);
  },
};

function handleProjectClick(e) {
  const projectWindows = document.querySelectorAll(".projectWindow");
  const formattedName = e.target.innerText.split(" ").join("_");
  projectWindows.forEach((p) => {
    if (p.getAttribute("id") == formattedName) {
      p.classList.toggle("invisible");
    }
    if (p.getAttribute("id") !== formattedName) {
      p.classList.add("invisible");
    }
  });
}

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
