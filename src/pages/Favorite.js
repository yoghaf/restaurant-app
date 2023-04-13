import FavoritePage from "../components/favorite";
import FavoriteRestoIdb from "../data/favorite-resto";
import Search from "../components/search";
import "../styles/favorite.css";
const Favorite = {
  async render() {
    return `
      <section >
    <div id="search-favorites"></div>
    <div id="favorite-list"></div>
      <section>
      `;
  },

  async afterRender() {
    const favorite = await FavoriteRestoIdb.getAllResto();
    const searchfavoritepages = document.querySelector("#search-favorites");
    searchfavoritepages.innerHTML = Search();
    const favoritepages = document.querySelector("#favorite-list");
    favoritepages.innerHTML += FavoritePage(favorite);
    const favoritebtn = document.querySelector("#search-favorite-button");
    favoritebtn.addEventListener("click", async () => {
      const query = document.querySelector("#search-favorite-input").value;
      const favorite = await FavoriteRestoIdb.getAllResto();
      console.log(favorite);
      console.log(query);
      if (query !== "") {
        const result = favorite.filter((resto) => resto.name.toLowerCase().includes(query.toLowerCase()));
        if (result.length === 0) {
          const style = `
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          height: 50vh;
        `;
          favoritepages.innerHTML = `<div style = "${style}" class="not-found"><h1>Restauran Tidak ditemukan</h1></div>`;
        } else {
          favoritepages.innerHTML = FavoritePage(result);
        }
      } else {
        favoritepages.innerHTML = FavoritePage(favorite);
      }
    });
  },
};

export default Favorite;
