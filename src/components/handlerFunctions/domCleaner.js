function domCleaner(query) {
  let element = document.querySelector(query);
  if (element) {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }
}

export { domCleaner };
