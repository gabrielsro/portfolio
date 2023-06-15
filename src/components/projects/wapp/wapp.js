import "./wappStyle.css";
import GitIcon from "../icons/git2.svg";
import LinkIcon from "../icons/link2.svg";

const Wapp = {
  generateContent() {
    let contentContainer = document.createElement("div");
    contentContainer.classList.add("projectWindow");
    contentContainer.classList.add("invisible");
    contentContainer.setAttribute("id", "Weather_App");
    let contentTxt = document.createElement("p");
    contentTxt.innerText = `WeatherApp is a classic weather application that displays several weather data for different cities around the world. It was built as a SPA using pure vanilla JavaScript, which means that, excluding its APIs for data gathering, it's completely client-side rendered and has a very fast UI. Users can save a list of favorite cities for ease of access, save a preferred system of measurement and see different metrics, among other features.`;
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
    githubLink.innerText = "github.com/gabrielsro/weather";
    githubLink.setAttribute("href", "https://github.com/gabrielsro/weather");
    //Site Link
    let linkIcon = new Image();
    linkIcon.src = LinkIcon;
    linkIcon.alt = "Link icon";
    linkIcon.classList.add("projectLinkIcon");
    let link = document.createElement("a");
    link.innerText = "gabrielsro.github.io/weather";
    link.setAttribute("href", "https://gabrielsro.github.io/weather/");

    //Pack it all up:
    contentLinks.appendChild(linkIcon);
    contentLinks.appendChild(link);
    contentLinks.appendChild(gitHubIcon);
    contentLinks.appendChild(githubLink);
    contentContainer.appendChild(contentLinks);
    return contentContainer;
  },
};

export { Wapp };
