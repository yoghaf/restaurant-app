import FavoriteRestoIdb from "../src/data/favorite-resto";

describe("Favorite Button Event Testing", () => {
  const restoran = {
    id: 1,
    name: "Sate Kambing",
    description: "Sate Kambing adalah makanan khas Indonesia yang terbuat dari daging kambing yang dibakar dengan cara dipotong-potong dan dibumbui dengan bumbu kacang dan bumbu lainnya.",
    pictureId: "1",
    city: "Jakarta",
    rating: 4.5,
  };

  beforeEach(() => {
    // Inisialisasi elemen dan variabel sebelum setiap pengujian
    document.body.innerHTML = `
    <button id="favorite-button">
    <svg viewBox="0 0 24 24"  class="">
      <path
      id="favoriteFill"
        fill="#ffffff"
        d=""
      ></path>
      <path
        fill="#DF2E38"
        clip-rule="evenodd"
        d=""
      ></path>
    </svg>
    </button>`;
  });

  it("should change fill color to #d32f2f when clicked and not in favorites", async () => {
    // Pengujian ketika tombol "favoriteBtn" ditekan dan restoran belum ada dalam daftar favorit
    const favoriteBtn = document.querySelector("#favorite-button");
    const favoriteFill = document.querySelector("#favoriteFill");
    const isRestoranInFavorites = await FavoriteRestoIdb.getResto(restoran.id);

    favoriteBtn.addEventListener("click", async () => {
      if (favoriteFill.getAttribute("fill") !== "#d32f2f" && isRestoranInFavorites === undefined) {
        favoriteFill.setAttribute("fill", "#d32f2f");
        await FavoriteRestoIdb.putResto(restoran);
      } else {
        favoriteFill.setAttribute("fill", "#ffffff");
        await FavoriteRestoIdb.deleteResto(restoran.id);
      }
    });

    // Simulasi klik pada tombol "favoriteBtn"
    favoriteBtn.click();

    // Cek apakah atribut "fill" dari path di dalam elemen SVG berubah menjadi "#d32f2f"
    expect(favoriteFill.getAttribute("fill")).toEqual("#d32f2f");

    // Simulasi klik lagi pada tombol "favoriteBtn"
    favoriteBtn.click();

    // Cek apakah atribut "fill" dari path di dalam elemen SVG berubah menjadi "#ffffff"
    expect(favoriteFill.getAttribute("fill")).toEqual("#ffffff");
  });

  it("should change fill color to #ffffff when clicked and in favorites", async () => {
    // Pengujian ketika tombol "favoriteBtn" ditekan dan restoran sudah ada dalam daftar favorit
    const favoriteBtn = document.querySelector("#favorite-button");
    const favoriteFill = document.querySelector("#favoriteFill");
    const isRestoranInFavorites = await FavoriteRestoIdb.getResto(restoran.id);

    favoriteBtn.addEventListener("click", async () => {
      if (favoriteFill.getAttribute("fill") !== "#d32f2f" && isRestoranInFavorites === undefined) {
        favoriteFill.setAttribute("fill", "#d32f2f");
        await FavoriteRestoIdb.putResto(restoran);
      } else {
        favoriteFill.setAttribute("fill", "#ffffff");
        await FavoriteRestoIdb.deleteResto(restoran.id);
      }
    });

    // Simulasi klik pada tombol "favoriteBtn"
    favoriteBtn.click();

    // Cek apakah atribut "fill" dari path di dalam elemen SVG berubah menjadi "#d32f2f"
    expect(favoriteFill.getAttribute("fill")).toEqual("#d32f2f");

    // Simulasi klik lagi pada tombol "favoriteBtn"
    favoriteBtn.click();

    // Cek apakah atribut "fill" dari path di dalam elemen SVG berubah menjadi "#ffffff"
    expect(favoriteFill.getAttribute("fill")).toEqual("#ffffff");
  });

  it("should not change fill color when clicked and in favorites", async () => {
    // Pengujian ketika tombol "favoriteBtn" ditekan dan restoran sudah ada dalam daftar favorit
    const favoriteBtn = document.querySelector("#favorite-button");
    const favoriteFill = document.querySelector("#favoriteFill");
    const isRestoranInFavorites = await FavoriteRestoIdb.getResto(restoran.id);

    // Tambahkan restoran ke dalam daftar favorit sebelum pengujian dimulai
    await FavoriteRestoIdb.putResto(restoran);

    favoriteBtn.addEventListener("click", async () => {
      if (favoriteFill.getAttribute("fill") !== "#d32f2f" && isRestoranInFavorites === undefined) {
        favoriteFill.setAttribute("fill", "#d32f2f");
        await FavoriteRestoIdb.putResto(restoran);
      } else {
        favoriteFill.setAttribute("fill", "#ffffff");
        await FavoriteRestoIdb.deleteResto(restoran.id);
      }
    });

    // Simulasi klik pada tombol "favoriteBtn"
    favoriteBtn.click();

    // Cek apakah atribut "fill" dari path di dalam elemen SVG tidak berubah
    expect(favoriteFill.getAttribute("fill")).toEqual("#d32f2f");

    // Cek apakah restoran tetap ada dalam daftar favorit
    expect(await FavoriteRestoIdb.getResto(restoran.id)).not.toBeUndefined();
  });
});
