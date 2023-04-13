import UrlParser from "../routes/url-parser";
import Dicodingresto from "../data/dicoding-resto";
import Details from "../components/details";
import ReviewModal from "../components/review-modal";
import FavoriteRestoIdb from "../data/favorite-resto";
const Detail = {
  async render() {
    return `
         <section id="detail_resto"></section>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detailrestodata = await Dicodingresto.detailRestaurant(url.id);
    const detailresto = document.querySelector("#detail_resto");
    detailresto.innerHTML = Details(detailrestodata);
    const reviewModal = document.querySelector("#review-modal");
    reviewModal.innerHTML = ReviewModal(detailrestodata);

    //favoritebtnevent
    const favoritebtn = document.querySelector("#favorite-button");

    if (await FavoriteRestoIdb.getResto(detailrestodata.id)) {
      const favoritefill = document.querySelector("#favorite-button svg path");
      favoritefill.setAttribute("fill", "#d32f2f");
    }

    favoritebtn.addEventListener("click", async () => {
      const favoritefill = document.querySelector("#favorite-button svg path");
      if (!(await FavoriteRestoIdb.getResto(detailrestodata.id)) && favoritefill.getAttribute("fill") === "#ffffff") {
        favoritefill.setAttribute("fill", "#d32f2f");
        await FavoriteRestoIdb.putResto(detailrestodata);
      } else if ((await FavoriteRestoIdb.getResto(detailrestodata.id)) && favoritefill.getAttribute("fill") === "#d32f2f") {
        favoritefill.setAttribute("fill", "#ffffff");
        await FavoriteRestoIdb.deleteResto(detailrestodata.id);
      }
    });

    //reviewbtnevent
    const btn = document.querySelector("#review-button");
    btn.addEventListener("click", async () => {
      const modals = document.querySelector("#modals");
      modals.style.display = "block";
    });
    const close = document.querySelector(".close");
    close.addEventListener("click", async () => {
      const modals = document.querySelector("#modals");
      if (modals.style.display === "block") {
        modals.style.display = "none";
      }
    });

    //submitbtnevent
    const submitbtn = document.querySelector("#submit-button");

    submitbtn.addEventListener("click", async (event) => {
      event.preventDefault();
      const name = document.querySelector("#name").value;
      const review = document.querySelector("#review").value;
      const reviewrating = document.querySelector("#review-rating").value;
      const date = new Date();
      const datestring = date.toISOString();
      const reviewdata = {
        id: detailrestodata.id,
        name: name,
        rating: reviewrating,
        review: review,
        date: datestring,
      };
    });
  },
};

export default Detail;
