const tabIndex = () => {
  const links = document.querySelectorAll("a:not(.nav-hidden a), button:not(.nav-hidden button)");

  links.forEach((a, i) => {
    a.setAttribute("tabindex", i + 1);
  });

  const skipLink = document.querySelector("#skip-link");
  const content = document.querySelector("#list-resto");

  skipLink.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      content.focus();
    }
  });
};

export default tabIndex;
