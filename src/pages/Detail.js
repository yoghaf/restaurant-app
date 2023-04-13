import UrlParser from "../routes/url-parser";
import Dicodingresto from "../data/dicoding-resto";
import Details from "../components/details";
import ReviewModal from "../components/review-modal";
import FavoriteRestoIdb from "../data/favorite-resto";
import { LoadingDetail } from "../components/loading-details";
import SuccessNotification from "../components/succes";

const Detail = {
  async render() {
    return `
      <section id="detail_resto">
        ${LoadingDetail()}
      </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detailresto = document.querySelector("#detail_resto");

    const detailrestodata = await Dicodingresto.detailRestaurant(url.id);

    detailresto.innerHTML = Details(detailrestodata);
    const reviewModal = document.querySelector("#review-modal");
    reviewModal.innerHTML = ReviewModal(detailrestodata);

    // Add event listeners

    // Favorite button event
    const favoritebtn = document.querySelector("#favorite-button");
    const favoritefill = document.querySelector("#favorite-button svg path");

    if (await FavoriteRestoIdb.getResto(detailrestodata.id)) {
      favoritefill.setAttribute("fill", "#d32f2f");
    }

    favoritebtn.addEventListener("click", async () => {
      if (!(await FavoriteRestoIdb.getResto(detailrestodata.id)) && favoritefill.getAttribute("fill") === "#ffffff") {
        favoritefill.setAttribute("fill", "#d32f2f");
        await FavoriteRestoIdb.putResto(detailrestodata);
      } else if ((await FavoriteRestoIdb.getResto(detailrestodata.id)) && favoritefill.getAttribute("fill") === "#d32f2f") {
        favoritefill.setAttribute("fill", "#ffffff");
        await FavoriteRestoIdb.deleteResto(detailrestodata.id);
      }
    });

    // Review button event
    document.addEventListener("click", (event) => {
      if (event.target && event.target.id === "review-button") {
        const modals = document.querySelector("#modals");
        modals.style.display = "block";
      }
    });

    // Close button event
    const close = document.querySelector(".close");
    close.addEventListener("click", () => {
      const modals = document.querySelector("#modals");
      if (modals.style.display === "block") {
        modals.style.display = "none";
      }
    });

    // Submit button event
    const submitbtn = document.querySelector("#submit-button");

    submitbtn.addEventListener("click", async (event) => {
      event.preventDefault();
      const name = document.querySelector("#name").value;
      const review = document.querySelector("#review").value;

      const reviewdata = {
        id: detailrestodata.id,
        name: name,
        review: review,
      };
      const result = await Dicodingresto.addReview(reviewdata);

      if (result) {
        const modals = document.querySelector("#modals");
        modals.style.display = "none";
        const reviewContainer = document.querySelector("#success-modal");
        reviewContainer.innerHTML = SuccessNotification();
        setTimeout(() => {
          reviewContainer.innerHTML = "";
        }, 1000);
      }
    });
  },
};

export default Detail;
