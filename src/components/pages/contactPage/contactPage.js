import "./contactPageStyle.css";
import EmailLight from "./icons/email1light.svg";
import PhoneLight from "./icons/phone1light.svg";
import AddressLight from "./icons/address1light.svg";
import EmailDark from "./icons/email1dark.svg";
import PhoneDark from "./icons/phone1dark.svg";
import AddressDark from "./icons/address1dark.svg";
const main = document.querySelector("main");
let contactPage = {
  generateContent() {
    let titleContainer = document.createElement("div");
    let title = document.createElement("h1");
    title.innerText = "Contact";
    titleContainer.appendChild(title);
    let infoContainer = document.createElement("div");
    let moon = document.getElementById("moon");
    let email = document.createElement("h2");
    email.innerText = "gabrielsro182@gmail.com";
    let emailIcon = new Image();
    emailIcon.setAttribute("id", "emailIcon");
    emailIcon.classList.add("forDark");
    emailIcon.src = EmailLight;
    emailIcon.alt = "Email icon";
    let emailIconLigth = new Image();
    emailIconLigth.setAttribute("id", "emailIconLight");
    emailIconLigth.classList.add("forLight");
    emailIconLigth.src = EmailDark;
    emailIconLigth.alt = "Email icon";
    let emailIcons = document.createElement("div");
    emailIcons.appendChild(emailIcon);
    emailIcons.appendChild(emailIconLigth);
    let phone = document.createElement("h2");
    phone.innerText = "+1 (463) 239-8161";
    let phoneIcon = new Image();
    phoneIcon.setAttribute("id", "phoneIcon");
    phoneIcon.classList.add("forDark");
    phoneIcon.src = PhoneLight;
    phoneIcon.alt = "Phone icon";
    let phoneIconLight = new Image();
    phoneIconLight.setAttribute("id", "phoneIconLight");
    phoneIconLight.classList.add("forLight");
    phoneIconLight.src = PhoneDark;
    phoneIconLight.alt = "Phone icon";
    let phoneIcons = document.createElement("div");
    phoneIcons.appendChild(phoneIcon);
    phoneIcons.appendChild(phoneIconLight);
    let address = document.createElement("h2");
    address.innerText = "315 N Lebanon St, Lebanon, IN 46052, US";
    let addressIcon = new Image();
    addressIcon.setAttribute("id", "addressIcon");
    addressIcon.classList.add("forDark");
    addressIcon.src = AddressLight;
    addressIcon.alt = "Address icon";
    let addressIconLight = new Image();
    addressIconLight.setAttribute("id", "addressIconLight");
    addressIconLight.classList.add("forLight");
    addressIconLight.src = AddressDark;
    addressIconLight.alt = "Address icon";
    let addressIcons = document.createElement("div");
    addressIcons.appendChild(addressIcon);
    addressIcons.appendChild(addressIconLight);
    main.appendChild(titleContainer);
    infoContainer.classList.add("infoContainer");
    infoContainer.appendChild(emailIcons);
    infoContainer.appendChild(email);
    infoContainer.appendChild(phoneIcons);
    infoContainer.appendChild(phone);
    infoContainer.appendChild(addressIcons);
    infoContainer.appendChild(address);
    if (moon.classList.contains("invisible")) {
      emailIconLigth.classList.add("invisible");
      phoneIconLight.classList.add("invisible");
      addressIconLight.classList.add("invisible");
    }
    if (!moon.classList.contains("invisible")) {
      emailIcon.classList.add("invisible");
      phoneIcon.classList.add("invisible");
      addressIcon.classList.add("invisible");
    }
    main.appendChild(infoContainer);
  },
};

export { contactPage };
