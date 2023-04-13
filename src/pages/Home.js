import Dicodingresto from "../data/dicoding-resto";
import Gallery from "../components/gallery";
const Home = {
  async render() {
    return `
       <div id="list_resto"></div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const resto = await Dicodingresto.allRestaurants();

    const restolist = document.querySelector("#list_resto");
    restolist.innerHTML = Gallery(resto);
  },
};

export default Home;
