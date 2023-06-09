import "../styles/footer.css";

class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `

    <footer>
    <div>
      <div class="footer-sec">
        <div class="footer-desc">
          <div class="footer-acordion">
            <button class="footer-btn-close">
              <svg viewBox="0 0 24 24" width="1em" height="1em" class="">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12H2.208v-1.5H22V12z"></path>
              </svg>
            </button>
            <button class="footer-btn-open">
              <svg viewBox="0 0 24 24" width="1em" height="1em" class="">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.25 11.25V3h1.5v8.25H21v1.5h-8.25V21h-1.5v-8.25H3v-1.5h8.25z"></path>
              </svg>
            </button>
          </div>
          <div>Tentang Eatreviews</div>
        </div>
        <ul>
          <li><a role="button" href="#">Tentang Kami</a></li>
          <li><a role="button" href="#">Sumber informasi dan Kebijakan</a></li>
          <li><a role="button" href="#">Hubungi Kami</a></li>
        </ul>
      </div>
      <div class="footer-sec">
        <div class="footer-desc">
          <div class="footer-acordion">
            <button role="button" aria-label="open-btn" class="footer-btn-close">
              <svg viewBox="0 0 24 24" width="1em" height="1em" class="">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12H2.208v-1.5H22V12z"></path>
              </svg>
            </button>
            <button class="footer-btn-open">
              <svg viewBox="0 0 24 24" width="1em" height="1em" class="">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.25 11.25V3h1.5v8.25H21v1.5h-8.25V21h-1.5v-8.25H3v-1.5h8.25z"></path>
              </svg>
            </button>
          </div>
          <div>Telusuri</div>
        </div>
        <ul>
          <li><a role="button" href="#">Pusat Bantuan</a></li>
        </ul>
      </div>
      <div class="footer-sec">
        <div class="footer-desc">
          <div class="footer-acordion">
            <button class="footer-btn-close">
              <svg viewBox="0 0 24 24" width="1em" height="1em" class="">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12H2.208v-1.5H22V12z"></path>
              </svg>
            </button>
            <button class="footer-btn-open">
              <svg viewBox="0 0 24 24" width="1em" height="1em" class="">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.25 11.25V3h1.5v8.25H21v1.5h-8.25V21h-1.5v-8.25H3v-1.5h8.25z"></path>
              </svg>
            </button>
          </div>
          <div>Dapatkan Aplikasi</div>
        </div>
        <ul>
          <li><a role="button" href="#">Aplikasi Iphone</a></li>
          <li><a role="button" href="#">Aplikasi Android</a></li>
        </ul>
      </div>
    </div>
    <div class="social-media">
    <a role="button" href="https://web.facebook.com/masyogaf/" target="_blank">
      <svg viewBox="0 0 24 24" width="24px" height="24px" class=""><path d="M12.001 2.061C6.478 2.061 2 6.537 2 12.061c0 4.993 3.661 9.132 8.445 9.879v-6.99H7.89v-2.889h2.556l.001-2.203c0-2.506 1.484-3.896 3.769-3.896 1.095 0 2.23.21 2.23.21v2.445h-1.253c-1.242 0-1.639.777-1.639 1.568l.003 1.876h2.777l-.444 2.889h-2.333v6.99C18.34 21.192 22 17.054 22 12.061c0-5.524-4.477-10-9.999-10z"></path></svg></a>
      </a> <a role="button"
      href="https://www.instagram.com/utomoyogha/" target="_blank">
      <svg viewBox="0 0 24 24" width="24px" height="24px" class=""><path d="M2 18.1c2.2.2 4.3-.5 5.9-1.899-1.2-.101-3.6-2.4-4-2.9h1.6c-1.9-.5-3.2-2.2-3.2-4.1.6.099 1.2.299 1.7.499h.2C2.7 8.3 2.2 6 3.1 4.1c2.1 2.6 5.3 4.2 8.6 4.4V7.4c.1-2.2 2-4 4.2-4 .9 0 1.7.3 2.4.8.4.3.8.3 1.2.2l1.9-.7c-.4.9-.9 1.6-1.6 2.3.601-.1 1.3-.4 1.9-.5l.3.2c-.6.5-1.2 1.1-1.7 1.5-.1.3-.2.7-.2 1.1 0 1.9-.5 3.8-1.3 5.601A11.982 11.982 0 019.5 20.1c-2.4.2-4.9-.199-7-1.3l-.5-.7"></path></svg></a>
      <a role="button" href="https://twitter.com/tomoyog99" targer="_blank">
      <svg viewBox="0 0 24 24" width="24px" height="24px" class=""><path d="M21.938 7.9c0-.8-.199-1.6-.5-2.4-.5-1.4-1.5-2.5-2.9-3-.799-.3-1.6-.4-2.4-.5h-4.099c-1.4 0-2.8 0-4.2.1-.8 0-1.6.2-2.3.5-1.3.5-2.4 1.5-2.9 2.8-.3.8-.5 1.6-.5 2.5 0 1.1-.1 1.4-.1 4.1-.1 1.4-.1 2.7 0 4.1 0 .801.2 1.601.5 2.4.5 1.3 1.6 2.4 2.9 2.9.8.3 1.6.399 2.4.5 1.4.1 2.8.1 4.2.1s2.8 0 4.099-.1c.801 0 1.602-.2 2.4-.5a5.17 5.17 0 002.9-2.9c.301-.8.398-1.6.5-2.4 0-1.1.1-1.399.1-4.1s-.1-3.1-.1-4.1zM20.137 16c0 .6-.1 1.3-.299 1.9-.301.898-1 1.6-1.9 1.898-.6.201-1.301.301-1.9.301-1.1 0-1.4.102-4 .102-1.3 0-2.7 0-4-.102-.6 0-1.2-.1-1.9-.3-.9-.3-1.6-1-1.9-1.899-.3-.601-.4-1.2-.4-1.9 0-1.1-.1-1.4-.1-4 0-1.3 0-2.7.1-4 .1-.6.2-1.3.3-1.9.3-.9 1-1.6 1.9-1.9.7-.2 1.3-.3 2-.3 1.1 0 1.4-.1 4-.1 1.3 0 2.701 0 4 .1.6 0 1.301.1 1.9.3.898.3 1.6 1 1.898 1.9.201.6.301 1.3.301 1.9 0 1.1.102 1.4.102 4-.001 2.6-.102 3-.102 4z"></path><path d="M12.138 6.9c-2.9 0-5.1 2.3-5.1 5.1s2.3 5.1 5.1 5.1 5.101-2.3 5.101-5.1-2.301-5.1-5.101-5.1zm0 8.4c-1.8 0-3.3-1.5-3.3-3.3s1.5-3.3 3.3-3.3c1.8 0 3.2 1.5 3.3 3.3 0 1.8-1.5 3.3-3.3 3.3zM17.438 5.5c-.699 0-1.199.5-1.199 1.2s.5 1.2 1.199 1.2 1.199-.5 1.199-1.2-.5-1.2-1.199-1.2z"></path></svg></a>
    </div>
    <div class="copyright">
      <div class="logo">
        <a role="button" href="">Eatreviews</a>
      </div>
      <div class="">
        ©
        <!-- -->2023<!-- -->
        Eatreviews LLC<!-- -->
        <!-- -->Semua hak dilindungi undang-undang.
      </div>
    </div>
  </footer>
    `;
  }
}

// Define the custom element
customElements.define("footer-resto", Footer);
