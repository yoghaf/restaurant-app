import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import "../components/navigation";
import "../components/hero";
import "../components/gallery";
import main from "../components/main";

console.log("Hello Coders! :)");
document.addEventListener("DOMContentLoaded", () => {
  main();
});
