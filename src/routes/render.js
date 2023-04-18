import UrlParser from "./url-parser";
import routes from "./routes";
import tabIndex from "../helpers/tabIndex";

async function renderPage() {
  const url = UrlParser.parseActiveUrlWithCombiner();
  const page = routes[url];
  const content = document.querySelector("#root");
  content.innerHTML = await page.render();
  await page.afterRender();
  tabIndex();
}
export default renderPage;
