import "./wappStyle.css";

const Wapp = {
  generateContent() {
    let contentContainer = document.createElement("div");
    let contentTxt = document.createElement("p");
    contentTxt.innerText = `Weather App is a classic weather application that displays several weather data for different cities around the world. It was built using pure vanilla JavaScript, which means that, excluding its APIs for data gathering, it's completely client-side rendered and has a very fast UI. Users can save a list of favorite cities for ease of access, save a preferred system of measurement and see different metrics among other features.`;
    contentContainer.appendChild(contentTxt);
    return contentContainer;
  },
};

export { Wapp };
