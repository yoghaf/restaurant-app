import "../styles/hero.css";
import heromage from "../public/images/heros/hero-image_4.jpg";
class Navigation extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section class="hero">
    <div class="hero-text">
      <h1>Indonesian Eatreviews</h1>
      <p>Hidangan nikmat tanpa merogoh kocek dalam-dalam!</p>
    </div>
    <img src="${heromage}" alt="Gambar Restoran">
  </section>
      `;
  }
}

// Define the custom element
customElements.define("hero-resto", Navigation);
