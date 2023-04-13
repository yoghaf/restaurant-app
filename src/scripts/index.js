import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import "../components/navigation";
import "../components/hero";
import "../components/gallery";
import "../components/footer";
import renderPage from "../routes/render";
import main from "../components/main";
import swRegister from "../helpers/sw-register";
document.addEventListener("DOMContentLoaded", () => {
  main();
});
window.addEventListener("hashchange", () => {
  renderPage();
});

window.addEventListener("load", () => {
  renderPage();
  swRegister();
});
