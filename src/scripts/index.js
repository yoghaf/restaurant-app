import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import "../components/navigation";
import "../components/hero";
import "../components/gallery";
import "../components/footer";
import renderPage from "../routes/render";
import main from "../components/main";
import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

document.addEventListener("DOMContentLoaded", () => {
  main();
});
window.addEventListener("hashchange", () => {
  renderPage();
});

window.addEventListener("load", () => {
  renderPage();
});
