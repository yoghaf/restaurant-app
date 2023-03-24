import "../styles/gallery.css";
import data from "../DATA.json";

class Gallery extends HTMLElement {
  connectedCallback() {
    this.render();
    console.log(data);
  }
  render() {
    this.innerHTML = `
        <section id="list-resto">
            <div class="title-resto">
            <h2>Cari tahu restoran terpopuler di kota Anda</h2>
            <div>Dari Sabang hingga Merauke</div>
            </div>
            <div class="list-content-resto">       
            ${data.restaurants
              .map((resto) => {
                return `

                <div>
                <div class="img-resto">
                <img src="${resto.pictureId}" alt="${resto.name}" />
                <button>
                    <svg viewBox="0 0 24 24" width="24px" height="24px" class="">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.798 5.786A5.769 5.769 0 017.72 4.25c1.455 0 2.857.548 3.922 1.536l.005.005.341.322.332-.317a5.769 5.769 0 013.928-1.54c1.458 0 2.862.55 3.928 1.54l.004.004c1.093 1.032 1.599 2.324 1.569 3.662-.03 1.323-.578 2.643-1.5 3.785-.884 1.096-2.85 2.943-4.547 4.478a183.566 183.566 0 01-3.153 2.785l-.069.059-.489-.569.49.569-.486.416-.488-.412a101.98 101.98 0 01-7.75-7.288l-.021-.021-.02-.023c-1.725-2.115-2.203-5.32.08-7.453l.002-.002zm8.19 13.226a174.415 174.415 0 002.708-2.4c1.72-1.556 3.59-3.32 4.385-4.306.757-.939 1.148-1.948 1.168-2.877.02-.912-.313-1.795-1.097-2.536a4.269 4.269 0 00-2.904-1.138 4.269 4.269 0 00-2.903 1.136l-1.35 1.292-1.375-1.3a4.269 4.269 0 00-2.9-1.133 4.269 4.269 0 00-2.901 1.135c-1.507 1.408-1.353 3.659.042 5.385a100.45 100.45 0 007.127 6.742z"
                    ></path>
                    </svg>
                </button>
                </div>
                <div>
                <div>${resto.name}</div>
                <div>
              
                <svg class="" viewBox="0 0 128 24" width="68" height="12" aria-label="">
                ${Array(Math.floor(resto.rating))
                  .fill()
                  .map((_, i) => {
                    return `
                      <path  fill="#FFC107" d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z" transform="translate(${26 * i} 0)"></path>
                    `;
                  })
                  .join("")}
                ${
                  resto.rating % 1 !== 0
                    ? `
                      <g transform="translate(${26 * Math.floor(resto.rating)} 0)">
                        <clipPath id="clip-rating">
                          <rect x="0" y="0" width="${(resto.rating % 1) * 100}%" height="100%"/>
                        </clipPath>
                        <g clipPath="url(#clip-rating)">
                          <path fill="#FFC107" d="M12 0C5.389 0 0 5.389 0 12c0 6.62 5.389 12 12 12 6.62 0 12-5.379 12-12S18.621 0 12 0zm0 2a9.984 9.984 0 0110 10 9.976 9.976 0 01-10 10z"></path>
                        </g>
                      </g>
                      `
                    : ""
                }
              </svg>
              
              
            
                <span>${resto.rating}</span>
              </div>
              
                <div>${resto.city}</div>
                </div>
            </div>

                `;
              })
              .join("")}
            </div>
        </section>`;
  }
}
customElements.define("gallery-resto", Gallery);
