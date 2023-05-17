import "./cfstStyle.css";
import GitIcon from "../icons/git2.svg";
import LinkIcon from "../icons/link2.svg";

const Cfst = {
  generateContent() {
    let contentContainer = document.createElement("div");
    contentContainer.classList.add("projectWindow");
    contentContainer.classList.add("invisible");
    contentContainer.setAttribute("id", "CarFast");
    let contentTxt = document.createElement("p");
    contentTxt.innerText = `CarFast is a web application for connecting car sellers with car buyers. CarFast allows the user to manage a vehicle inventory through CRUD operations on different data models such as cars, makes, models, etc. It supports image storage and takes advantage of relevant APIs to gather exhaustive information on each car. CarFast uses Node.js and MongoDB to deliver a SSR fullstack solution.`;
    contentContainer.appendChild(contentTxt);
    /**
     * Links:
     */
    let contentLinks = document.createElement("div");
    contentLinks.classList.add("projectLinksContainer");
    //GH Link
    let gitHubIcon = new Image();
    gitHubIcon.src = GitIcon;
    gitHubIcon.alt = "GitHub icon";
    gitHubIcon.classList.add("projectGHIcon");
    let githubLink = document.createElement("a");
    githubLink.innerText = "github.com/gabrielsro/cars-app";
    githubLink.setAttribute("href", "https://github.com/gabrielsro/cars-app");
    //Site Link
    let linkIcon = new Image();
    linkIcon.src = LinkIcon;
    linkIcon.alt = "Link icon";
    linkIcon.classList.add("projectLinkIcon");
    let link = document.createElement("a");
    link.innerText = "pending";

    //Pack it all up:
    contentLinks.appendChild(linkIcon);
    contentLinks.appendChild(link);
    contentLinks.appendChild(gitHubIcon);
    contentLinks.appendChild(githubLink);
    contentContainer.appendChild(contentLinks);
    return contentContainer;
  },
};

export { Cfst };
