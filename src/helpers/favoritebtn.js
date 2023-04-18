// Kode handlefavorite.js
import FavoriteRestoIdb from "../data/favorite-resto";

const handleFavorite = {
  favoritebtn: null,
  favoritefill: null,

  async fillcheck(detailrestodata, favoriteid, fillid) {
    this.favoritebtn = document.querySelector(`#${favoriteid}`);
    this.favoritefill = document.querySelector(`#${fillid}`);
    const isRestoInFavorites = await FavoriteRestoIdb.getResto(detailrestodata.id);
    if (isRestoInFavorites === undefined) {
      this.favoritefill.setAttribute("fill", "#ffffff");
    } else if (isRestoInFavorites) {
      this.favoritefill.setAttribute("fill", "#d32f2f");
    }
  },

  buttonfavorite(detailrestodata, favoriteid, fillid) {
    this.favoritebtn = document.querySelector(`#${favoriteid}`);
    this.favoritefill = document.querySelector(`#${fillid}`);

    if (detailrestodata.id === undefined) return;
    this.favoritebtn.addEventListener("click", async () => {
      const isRestoInFavorites = await FavoriteRestoIdb.getResto(detailrestodata.id);

      if (isRestoInFavorites === undefined && this.favoritefill.getAttribute("fill") === "#ffffff") {
        this.favoritefill.setAttribute("fill", "#d32f2f");
        await FavoriteRestoIdb.putResto(detailrestodata);
      } else if (isRestoInFavorites && this.favoritefill.getAttribute("fill") === "#d32f2f") {
        this.favoritefill.setAttribute("fill", "#ffffff");
        await FavoriteRestoIdb.deleteResto(detailrestodata.id);
      }
    });
  },
};

export default handleFavorite;
