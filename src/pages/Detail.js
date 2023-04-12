import UrlParser from "../routes/url-parser";
import Dicodingresto from "../data/dicoding-resto";
import Details from "../components/details";
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
    console.log(detailrestodata);
  },
};

export default Detail;
