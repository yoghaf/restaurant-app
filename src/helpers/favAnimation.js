const onFavorite = () => {
  const favbuttons = document.querySelectorAll("#myButton");
  favbuttons.forEach((favbutton) => {
    const svgpath = favbutton.querySelector("svg path");
    favbutton.addEventListener("click", (event) => {
      event.preventDefault();
      if (svgpath.getAttribute("fill") === "#ffffff") {
        svgpath.setAttribute("fill", "#DF2E38");
      } else {
        svgpath.setAttribute("fill", "#ffffff");
      }
    });
  });
};
export default onFavorite;
