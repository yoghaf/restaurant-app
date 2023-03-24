import "../styles/nav.css";
class Navigation extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <header>
    <nav class="nav-desktop">
      <div class="hamburger">
        <button id="button-hamburger" href="#">
          <svg viewBox="0 0 24 24" width="1em" height="1em" class=""><path fill-rule="evenodd" clip-rule="evenodd" d="M21 7.75H3v-1.5h18v1.5zm0 5H3v-1.5h18v1.5zm0 5H3v-1.5h18v1.5z"></path></svg>
        </button>
      </div>
      <div class="logo">
        <a href="">Eatreviews</a>
      </div>
      <ul>
        <li>Home</li>
        <li>Favorite</li>
        <li>About Us</li>
      </ul>
    </nav>
    <div>
      <nav class="nav-hidden">
        <button class="close-button">&times;</button>
        <ul>
          <li><a>Home</a></li>
          <li><a>Favorit</a></li>
          <li><a>About Us</a></li>
        </ul>
      </nav>
      <button class="shadow-nav"></button>
    </div>
  </header>
      `;
  }
}

// Define the custom element
customElements.define("navigation-resto", Navigation);
