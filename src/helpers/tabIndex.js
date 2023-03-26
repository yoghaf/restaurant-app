const tabIndex = () => {
  const links = document.querySelectorAll("a:not(.nav-hidden a), button:not(.nav-hidden button)");

  links.forEach((a, i) => {
    a.setAttribute("tabindex", i + 1);
  });

  const skipLink = document.querySelector("#skip-link");
  const content = document.querySelector("#list-resto");

  skipLink.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      content.focus();
    }
  });

  // const astyle = document.querySelectorAll("a");
  // const buttonstyle = document.querySelectorAll("button");

  // astyle.forEach((link) => {
  //   link.style.minWidth = "44px";
  //   link.style.minHeight = "44px";
  // });

  // buttonstyle.forEach((button) => {
  //   button.style.minWidth = "44px";
  //   button.style.minHeight = "44px";
  // });
};

export default tabIndex;
