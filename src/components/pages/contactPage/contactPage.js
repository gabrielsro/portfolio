import "./contactPageStyle.css";
import EmailLight from "./icons/email1light.svg";
const main = document.querySelector("main");
let contactPage = {
  generateContent() {
    let titleContainer = document.createElement("div");
    let title = document.createElement("h1");
    title.innerText = "Contact";
    titleContainer.appendChild(title);
    let infoContainer = document.createElement("div");
    let emailRow = document.createElement("div");
    let email = document.createElement("h2");
    email.innerText = "gabrielsro182@gmail.com";
    let emailIcon = document.createElement("img");
    emailIcon.alt = "Email icon";
    email.src = EmailLight;
    emailRow.appendChild(emailIcon);
    emailRow.appendChild(email);
    let phoneRow = document.createElement("div");
    let phone = document.createElement("h2");
    phone.innerText = "+1 (463) 239-8161";
    phoneRow.appendChild(phone);
    let addressRow = document.createElement("div");
    let address = document.createElement("h2");
    address.innerText = "315 N Lebanon St, Lebanon, IN 46052, US";
    addressRow.appendChild(address);
    infoContainer.appendChild(emailRow);
    infoContainer.appendChild(phoneRow);
    infoContainer.appendChild(addressRow);
    main.appendChild(titleContainer);
    main.appendChild(infoContainer);
  },
};

export { contactPage };
