const tabIndex = () => {
  const links = document.querySelectorAll("a:not(.nav-hidden a), button:not(.nav-hidden button)");

  links.forEach((a, i) => {
    a.setAttribute("tabindex", i + 1);
  });

  const skipLink = document.querySelector("#skip-link");
  const content = document.querySelector("#root");

  skipLink.addEventListener("click", (e) => {
    e.preventDefault();
    content.scrollIntoView({ behavior: "smooth" });
    skipLink.focus();
  });
};

export default tabIndex;
