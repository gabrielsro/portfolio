import "./style.css";
import { Navbar } from "./components/navbar";
import { Animation } from "./components/animations/home";
import DarkIconDark from "./images/iconsDark/dark2dark.svg";
import LightIconDark from "./images/iconsLight/light1dark.svg";

let body = document.querySelector("body");
body.classList.add("darkMode");
let header = document.querySelector("header");
let footer = document.querySelector("footer");

function renderHome() {
  header.classList.add("header-home");
  let titleContainer = document.createElement("div");
  titleContainer.classList.add("titleContainer");
  let title = document.createElement("h1");
  let darkIconDark = new Image();
  darkIconDark.src = DarkIconDark;
  darkIconDark.alt = "Dark mode icon";
  darkIconDark.classList.add("invisible");
  let lightIconDark = new Image();
  lightIconDark.src = LightIconDark;
  lightIconDark.alt = "Light mode icon";
  let iconsContainer = document.createElement("div");
  iconsContainer.classList.add("iconsContainer");
  iconsContainer.classList.add("titleIcons");
  iconsContainer.appendChild(lightIconDark);
  iconsContainer.appendChild(darkIconDark);
  title.innerText = "Gabriel Rodriguez";
  title.addEventListener("click", () => Animation.intro());
  titleContainer.appendChild(title);
  titleContainer.appendChild(iconsContainer);
  header.appendChild(titleContainer);
  header.appendChild(Navbar());

  titleContainer.appendChild(Animation.canvas);

  /**
   * Light/dark mode switch
   */
  lightIconDark.addEventListener("click", () => {
    body.classList.remove("darkMode");
    body.classList.add("lightMode");
    darkIconDark.classList.remove("invisible");
    lightIconDark.classList.add("invisible");
  });
  darkIconDark.addEventListener("click", () => {
    body.classList.add("darkMode");
    body.classList.remove("lightMode");
    darkIconDark.classList.add("invisible");
    lightIconDark.classList.remove("invisible");
  });

  footer.classList.add("footer-home");
  footer.appendChild(Navbar());
}

renderHome();
