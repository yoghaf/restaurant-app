import FavoritePage from "../components/favorite";
import FavoriteRestoIdb from "../data/favorite-resto";
import Search from "../components/search";
import "../styles/favorite.css";

const Favorite = {
  async render() {
    return `
      <section>
        <div id="search-favorites"></div>
        <div id="favorite-list"></div>
      </section>
    `;
  },

  async afterRender() {
    const favoriteRestaurants = await FavoriteRestoIdb.getAllResto();
    const searchFavoritesContainer = document.querySelector("#search-favorites");
    searchFavoritesContainer.innerHTML = Search();
    const favoriteListContainer = document.querySelector("#favorite-list");
    favoriteListContainer.innerHTML = FavoritePage(favoriteRestaurants);
    const favoriteBtn = document.querySelector("#search-favorite-button");
    favoriteBtn.addEventListener("click", async () => {
      const query = document.querySelector("#search-favorite-input").value;
      if (query !== "") {
        const filterCallback = (resto) => resto.name.toLowerCase().includes(query.toLowerCase());

        const filteredRestaurants = favoriteRestaurants.filter(filterCallback);

        if (filteredRestaurants.length === 0) {
          const notFoundStyle = `
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            height: 50vh;
          `;

          favoriteListContainer.innerHTML = `<div style="${notFoundStyle}" class="not-found"><h1>Restauran Tidak ditemukan</h1></div>`;
        } else {
          favoriteListContainer.innerHTML = FavoritePage(filteredRestaurants);
        }
      } else {
        favoriteListContainer.innerHTML = FavoritePage(favoriteRestaurants);
      }
    });
  },
};

export default Favorite;
