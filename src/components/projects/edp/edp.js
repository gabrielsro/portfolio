import "./edpStyle.css";
import GitIcon from "../icons/git2.svg";
import LinkIcon from "../icons/link2.svg";

const Edp = {
  generateContent() {
    let contentContainer = document.createElement("div");
    contentContainer.classList.add("projectWindow");
    contentContainer.classList.add("invisible");
    contentContainer.setAttribute("id", "esdepolitologos.com");
    let contentTxt = document.createElement("p");
    contentTxt.innerText = `esdepolitologos.com (EDP) is the largest hispanic Political Science community, featuring webinars, academic resources and political analysis. As a result of their website's rise in popularity, EDP saw the need for a reliable and easy-to-use application for managing and distributing their book collection. I built EDP's "Biblioteca" (Spanish for Library) on top of their website (esdepolitologos.com) as a solution for EDP's growing traffic. Implemented in PHP and vanilla CSS, the library is fast, easy to maintain and has an intuitive UI. EDP's library is visited by more than 500 users each day.`;
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
    githubLink.classList.add("ghLink");
    githubLink.innerText = "asasasass";
    //Site Link
    let linkIcon = new Image();
    linkIcon.src = LinkIcon;
    linkIcon.alt = "Link icon";
    linkIcon.classList.add("projectLinkIcon");
    let link = document.createElement("a");
    link.innerText = "esdepolitologos.com/biblioteca/";
    link.setAttribute("href", "https://esdepolitologos.com/biblioteca/");

    //Pack it all up:
    contentLinks.appendChild(linkIcon);
    contentLinks.appendChild(link);
    contentLinks.appendChild(gitHubIcon);
    contentLinks.appendChild(githubLink);
    contentContainer.appendChild(contentLinks);

    return contentContainer;
  },
};

export { Edp };
