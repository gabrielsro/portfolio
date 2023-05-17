import "./aboutPageStyle.css";
import Js from "./icons/js3.svg";
import Node from "./icons/node.svg";
import Mongo from "./icons/mongo.svg";
import Php from "./icons/php.svg";
import Mysql from "./icons/mysql.svg";
import Html from "./icons/html.svg";
import Css from "./icons/css.svg";
import React from "./icons/react.svg";
import Git from "./icons/git.svg";

const main = document.querySelector("main");

let aboutPage = {
  generateContent() {
    let titleContainer = document.createElement("div");
    let title = document.createElement("h1");
    title.innerText = "About";
    titleContainer.appendChild(title);
    let infoContainer = document.createElement("div");
    infoContainer.setAttribute("id", "aboutInfoTxt");
    infoContainer.innerText = `My projects are a result of me blending  my interest in Statistics, Probability and Software Development so I can better serve the increasing need for data accessibility, visualization, and understanding.`;
    let toolsContainer = document.createElement("div");
    let toolsTitle = document.createElement("h3");
    toolsTitle.setAttribute("id", "aboutSubtitle");
    toolsTitle.innerText = "Some of the languages I speak:";
    let tools = document.createElement("div");
    tools.classList.add("tools");
    let jsCard = cardMaker(Js, "JavaScript");
    tools.appendChild(jsCard);
    let nodeCard = cardMaker(Node, "Node.js");
    tools.appendChild(nodeCard);
    let mongoCard = cardMaker(Mongo, "MongoDB");
    tools.appendChild(mongoCard);
    let phpCard = cardMaker(Php, "PHP");
    tools.appendChild(phpCard);
    let mysqlCard = cardMaker(Mysql, "MySQL");
    tools.appendChild(mysqlCard);
    let htmlCard = cardMaker(Html, "HTML");
    tools.appendChild(htmlCard);
    let cssCard = cardMaker(Css, "CSS");
    tools.appendChild(cssCard);
    let reactCard = cardMaker(React, "React");
    tools.appendChild(reactCard);
    let gitCard = cardMaker(Git, "Git");
    tools.appendChild(gitCard);
    toolsContainer.appendChild(toolsTitle);
    let pageContainer = document.createElement("div");
    pageContainer.classList.add("pageContainer");
    pageContainer.setAttribute("id", "aboutPageContainer");
    pageContainer.appendChild(titleContainer);
    pageContainer.appendChild(infoContainer);
    pageContainer.appendChild(toolsContainer);
    pageContainer.appendChild(tools);
    main.appendChild(pageContainer);
  },
};

function cardMaker(img, txt) {
  let card = document.createElement("div");
  card.classList.add("languageCard");
  // Image:
  let imgContainer = document.createElement("div");
  let icon = new Image();
  icon.src = img;
  icon.alt = `${txt} icon`;
  imgContainer.appendChild(icon);
  // Text:
  let txtContainer = document.createElement("div");
  let text = document.createElement("h4");
  text.innerText = txt;
  txtContainer.appendChild(text);
  // Assemble Image and Text
  card.appendChild(imgContainer);
  card.appendChild(txtContainer);
  return card;
}

export { aboutPage };
