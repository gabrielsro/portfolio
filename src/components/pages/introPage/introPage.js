import "./introPageStyle.css";
const main = document.querySelector("main");
const introPage = {
  generateContent() {
    let introContainer = document.createElement("div");
    introContainer.classList.add("intro");
    let phrase1 = document.createElement("p");
    let phrase2 = document.createElement("p");
    let phrase3 = document.createElement("p");
    phrase1.innerText = `My name is Gabriel and you've found my portfolio.`;
    phrase2.innerText = `I'm an engineer focused on developing performant, accessible and
          secure web applications.`;
    phrase3.innerText = `In this website you can find some of my projects and try for yourself
          if the previous statement holds true or not!`;
    introContainer.appendChild(phrase1);
    introContainer.appendChild(phrase2);
    introContainer.appendChild(phrase3);
    main.appendChild(introContainer);
  },
};

export { introPage };
