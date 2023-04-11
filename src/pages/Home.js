import Dicodingresto from "../data/dicoding-resto";
import Gallery from "../components/gallery";
const Home = {
  async render() {
    return `
       <section id="list_resto"></section>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const resto = await Dicodingresto.allRestaurants();
    console.log(resto);
    const restolist = document.querySelector("#list_resto");
    restolist.innerHTML = Gallery(resto);
  },
};

export default Home;
