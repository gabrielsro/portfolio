import "./style.css";

const Navbar = () => {
  let navbar = document.createElement("nav");
  let about = document.createElement("a");
  about.innerText = "About";
  let projects = document.createElement("a");
  projects.innerText = "Projects";
  let contact = document.createElement("a");
  contact.innerText = "Contact";
  navbar.appendChild(about);
  navbar.appendChild(projects);
  navbar.appendChild(contact);
  return navbar;
};

export { Navbar };
