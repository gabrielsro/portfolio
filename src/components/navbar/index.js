import "./style.css";
import { Animation } from "../animations/home";

const Navbar = () => {
  let navbar = document.createElement("nav");
  let home = document.createElement("a");
  home.innerText = "Home";
  home.addEventListener("click", () => Animation.intro());
  let about = document.createElement("a");
  about.innerText = "About";
  about.addEventListener("click", () => Animation.about());
  let projects = document.createElement("a");
  projects.innerText = "Projects";
  projects.addEventListener("click", () => Animation.projects());
  let contact = document.createElement("a");
  contact.innerText = "Contact";
  contact.addEventListener("click", () => Animation.contact());
  let navbarContents = document.createElement("div");
  navbarContents.appendChild(home);
  navbarContents.appendChild(about);
  navbarContents.appendChild(projects);
  navbarContents.appendChild(contact);
  navbar.appendChild(navbarContents);
  return navbar;
};

export { Navbar };
