import Dicodingresto from "../data/dicoding-resto";
import Gallery from "../components/gallery";
import { showLoading, hideLoading } from "../helpers/loading-home";
import "../styles/loading-gallery.css";

const Home = {
  async render() {
    return `
      <div id="list_resto">
        ${showLoading(8)}
      </div>
    `;
  },

  async afterRender() {
    const restolist = document.querySelector("#list_resto");
    const allRestaurants = await Dicodingresto.allRestaurants();
    hideLoading();
    restolist.innerHTML = Gallery(allRestaurants);
  },
};

export default Home;
