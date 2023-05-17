import "./cfstStyle.css";

const Cfst = {
  generateContent() {
    let contentContainer = document.createElement("div");
    let contentTxt = document.createElement("p");
    contentTxt.innerText = `CarFast is a web application for connecting car sellers with car buyers. CarFast allows the user to manage a vehicle inventory through CRUD operations on different data models such as cars, makes, models, etc. It supports image storage and takes advantage of relevant APIs to gather exhaustive information on each car. CarFast uses Node.js and MongoDB to deliver a SSR fullstack solution.`;
    contentContainer.appendChild(contentTxt);
    return contentContainer;
  },
};

export { Cfst };
