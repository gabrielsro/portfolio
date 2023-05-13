import "./style.css";
import { Navbar } from "./components/navbar";
import { canvasHome } from "./components/animations/home";

let header = document.querySelector("header");
let main = document.querySelector("main");
let footer = document.querySelector("footer");

function renderHome() {
  header.classList.add("header-home");
  let title = document.createElement("h1");
  title.innerText = "Gabriel Rodriguez";
  header.appendChild(title);
  header.appendChild(Navbar());

  main.appendChild(canvasHome);

  footer.classList.add("footer-home");
  footer.appendChild(Navbar());
}

renderHome();
