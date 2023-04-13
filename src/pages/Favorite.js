import FavoritePage from "../components/favorite";
import FavoriteRestoIdb from "../data/favorite-resto";
const Favorite = {
  async render() {
    return `
      <section id="favorite-pages"><section>
      `;
  },

  async afterRender() {
    const favorite = await FavoriteRestoIdb.getAllResto();
    const favoritepages = document.querySelector("#favorite-pages");
    favoritepages.innerHTML = FavoritePage(favorite);
  },
};

export default Favorite;
