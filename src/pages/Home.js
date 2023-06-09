import Dicodingresto from "../data/dicoding-resto";
import Gallery from "../components/gallery";
import { showLoading, hideLoading } from "../helpers/loading-home";
import "../styles/loading-gallery.css";

const Loadinghome = () => `
  <div class="loading">
    <div class="container-loading">
      ${Array(8)
        .fill()
        .map(
          () => `
            <div class="card">
              <div class="card-image"></div>
              <div class="card-content">
                <div class="card-title"></div>
                <div class="card-rating"></div>
                <div class="card-city"></div>
              </div>
            </div>
          `
        )
        .join("")}
    </div>
  </div>
`;

const hideLoading = () => {
  const loading = document.querySelector(".loading");
  loading.style.display = "none";
};

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
    restolist.innerHTML = Gallery(restoall);
  },
};

export default Home;
