import UrlParser from "../routes/url-parser";
import Dicodingresto from "../data/dicoding-resto";
import Details from "../components/details";
import ReviewModal from "../components/review-modal";
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
    console.log(detailrestodata);
    //favoritebtnevent
    const favoritebtn = document.querySelector("#favorite-button");
    favoritebtn.addEventListener("click", async () => {
      const favoritefill = document.querySelector("#favorite-button svg path");
      if (favoritefill.getAttribute("fill") === "#ffffff") {
        favoritefill.setAttribute("fill", "#DF2E38");
      } else {
        favoritefill.setAttribute("fill", "#ffffff");
      }
      const resto = {
        id: detailrestodata.id,
        name: detailrestodata.name,
        description: detailrestodata.description,
        pictureId: detailrestodata.pictureId,
        city: detailrestodata.city,
        rating: detailrestodata.rating,
      };
      console.log(resto);
    });

    //reviewbtnevent
    const btn = document.querySelector("#review-button");
    btn.addEventListener("click", async () => {
      console.log("terklik");
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
      const date = new Date();
      const datestring = date.toISOString();
      const reviewdata = {
        id: detailrestodata.id,
        name: name,
        review: review,
        date: datestring,
      };
      console.log(reviewdata);
    });
  },
};

export default Detail;
