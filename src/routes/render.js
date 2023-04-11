import UrlParser from "../routes/url-parser";
import routes from "../routes/routes";
async function renderPage() {
  const url = UrlParser.parseActiveUrlWithCombiner();
  const page = routes[url];
  const content = document.querySelector("#root");
  content.innerHTML = await page.render();
  await page.afterRender();
}
export default renderPage;
