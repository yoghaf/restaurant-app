import handleFavorite from "../src/helpers/favoritebtn";
import FavoriteRestoIdb from "../src/data/favorite-resto";

describe("Liking A Restaurant", () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = `    <button id="favorite-button">
<svg viewBox="0 0 24 24"  class="">
  <path id="favoritefill"
    fill="#ffffff"
    d="M19.665 6.346a5.018 5.018 0 00-3.417-1.34c-1.27 0-2.491.478-3.417 1.34l-.84.802-.859-.812A5.019 5.019 0 007.72 5a5.019 5.019 0 00-3.412 1.336c-1.899 1.773-1.579 4.508-.01 6.43A101.233 101.233 0 0011.99 20s5.995-5.143 7.674-7.224c1.679-2.08 1.879-4.657 0-6.43z"
  ></path>
  <path
    fill="#DF2E38"
    clip-rule="evenodd"
    d="M3.968 5.969A5.519 5.519 0 017.72 4.5c1.392 0 2.734.525 3.752 1.469l.004.003.513.486.501-.479a5.519 5.519 0 013.758-1.474c1.395 0 2.739.527 3.758 1.474l.002.003c1.042.984 1.519 2.207 1.49 3.475-.027 1.257-.55 2.525-1.444 3.633-.869 1.077-2.82 2.91-4.52 4.45a184.435 184.435 0 01-3.149 2.78l-.068.06-.326-.38.326.38-.323.277-.326-.275a101.716 101.716 0 01-7.731-7.27l-.014-.014-.013-.015c-1.673-2.051-2.098-5.1.056-7.113l.002-.001zm8.02 13.373a182.874 182.874 0 002.874-2.544c1.718-1.553 3.604-3.332 4.414-4.336.784-.972 1.201-2.033 1.223-3.027.022-.984-.34-1.935-1.176-2.725a4.519 4.519 0 00-3.075-1.205c-1.143 0-2.242.431-3.074 1.204l-1.18 1.13L10.79 6.7A4.519 4.519 0 007.72 5.5c-1.141 0-2.24.43-3.072 1.202-1.637 1.53-1.428 3.941.025 5.733a100.704 100.704 0 007.316 6.907z"
  ></path>
</svg>
</button>`;
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it("should fill #ffffff the like button when the restaurant has not been liked before", async () => {
    handleFavorite.fillcheck({ id: 1 }, "favorite-button", "favoritefill");
    expect(document.querySelector("#favoritefill").getAttribute("fill")).toEqual("#ffffff");
  });
  it("should fill #d32f2f the like button when the restaurant has been liked before", async () => {
    FavoriteRestoIdb.putResto({ id: 1 });
    await handleFavorite.fillcheck({ id: 1 }, "favorite-button", "favoritefill");
    expect(document.querySelector("#favoritefill").getAttribute("fill")).toEqual("#d32f2f");
    FavoriteRestoIdb.deleteResto(1);
  });

  it("should not throw error if the unliked restaurant is not in the list", async () => {
    handleFavorite.buttonfavorite({ id: 1 }, "favorite-button", "favoritefill");
    expect(await FavoriteRestoIdb.getAllResto()).toEqual([]);
  });

  it("should not throw error if the liked restaurant is not in the list", async () => {
    FavoriteRestoIdb.putResto({ id: 1 });
    handleFavorite.buttonfavorite({ id: 1 }, "favorite-button", "favoritefill");
    expect(await FavoriteRestoIdb.getAllResto()).toEqual([{ id: 1 }]);
    FavoriteRestoIdb.deleteResto(1);
  });
  it("should not add a restaurant when it has no id", async () => {
    handleFavorite.buttonfavorite({}, "favorite-button", "favoritefill");
    expect(await FavoriteRestoIdb.getAllResto()).toEqual([]);
  });
});
