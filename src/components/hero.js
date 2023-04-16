import "../styles/hero.css";
import heromage from "../public/images/heros/hero-large.jpg";
import herosmall from "../public/images/heros/hero-small.jpg";

class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section id="home" class="hero">
    <div class="hero-text">
      <h1>Indonesian Eatreviews</h1>
      <p>Hidangan nikmat tanpa merogoh kocek dalam-dalam!</p>
    </div>
    <picture>
    <source media="(max-width: 600px)" srcset="${herosmall}">
    <source type="image/webp" srcset="${heromage}">
    <source type="image/jpeg" srcset="${heromage}">
    <img  class ="lazyload" src="${heromage}" alt="Gambar Restoran">
    </picture>
  </section>
      `;
  }
}

// Define the custom element
customElements.define("hero-resto", Hero);
