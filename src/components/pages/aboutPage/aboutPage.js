import "./aboutPageStyle.css";
const main = document.querySelector("main");

let aboutPage = {
  generateContent() {
    let titleContainer = document.createElement("div");
    let title = document.createElement("h1");
    title.innerText = "About";
    titleContainer.appendChild(title);
    main.appendChild(titleContainer);
  },
};

export { aboutPage };
