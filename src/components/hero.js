import "../styles/hero.css";
import herolarge from "../public/images/heros/hero-large.jpg";
import herosmall from "../public/images/heros/hero-small.jpg";

class Navigation extends HTMLElement {
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
    <source type="image/webp" srcset="${herosmall}">
    <source type="image/jpeg" srcset="${herolarge}">
    <source type="image/webp" srcset="${herosmall}">
    <source type="image/jpeg" srcset="${herolarge}">
    <source media="(max-width: 600px)" srcset="${herosmall}">
    <img class="lazyload" data-src="${herolarge}" alt="hero image" />
    </picture>
  </section>
      `;
  }
}

// Define the custom element
customElements.define("hero-resto", Navigation);
