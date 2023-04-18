import UrlParser from "../routes/url-parser";
import Dicodingresto from "../data/dicoding-resto";
import Details from "../components/details";
import ReviewModal from "../components/review-modal";
import { LoadingDetail } from "../components/loading-details";
import handleFavorite from "../helpers/favoritebtn";
import handleReview from "../helpers/reviewbtn";

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
    const favoritebtn = "favorite-button";
    const favoritefill = "favoritefill";
    // Favorite button event
    const myHandlefavorite = Object.create(handleFavorite);
    myHandlefavorite.fillcheck(detailrestodata, favoritebtn, favoritefill);
    myHandlefavorite.buttonfavorite(detailrestodata, favoritebtn, favoritefill);

    // Review button event
    handleReview(detailrestodata);
  },
};

export default Detail;
