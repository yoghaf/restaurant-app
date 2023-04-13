import "../styles/favorite.css";
import CONFIG from "../globals/config";
const FavoritePage = (resto) => {
  return `
  <section id="list-resto">
      <div class="title-resto">
      <h2>Favorite Saya (${resto.length > 0 ? resto.length : "Belum ada favorite"}) </h2>
      </div>
      
    
      <div class="list-content-resto">       
      ${resto
        .map((resto) => {
          return `
          <div>
          <div class="img-resto">
          <a role="button" href="#/detail/${resto.id}">
          <img src="${CONFIG.BASE_IMAGE_URL}${resto.pictureId}" alt="${resto.name}" />
        </a>
      
          </div>
          <div>
            <a role="button" href="#/detail/${resto.id}">
              <div>${resto.name}</div>
            </a>
            <div>
            <svg class="" viewBox="0 0 128 24" width="68" height="12" aria-label="">
            ${Array(Math.floor(resto.rating))
              .fill()
              .map((_, i) => {
                return `
                  <path  fill="#FFC107" d="M22 10.1c.1-.5-.3-1.1-.8-1.1l-5.7-.8L12.9 3c-.1-.2-.2-.3-.4-.4-.5-.3-1.1-.1-1.4.4L8.6 8.2 2.9 9c-.3 0-.5.1-.6.3-.4.4-.4 1 0 1.4l4.1 4-1 5.7c0 .2 0 .4.1.6.3.5.9.7 1.4.4l5.1-2.7 5.1 2.7c.1.1.3.1.5.1h.2c.5-.1.9-.6.8-1.2l-1-5.7 4.1-4c.2-.1.3-.3.3-.5z" transform="translate(${
                    26 * i
                  } 0)"></path>
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
                      <path fill="#FFC107" d="M22 10.1c.1-.5-.3-1.1-.8-1.1l-5.7-.8L12.9 3c-.1-.2-.2-.3-.4-.4-.5-.3-1.1-.1-1.4.4L8.6 8.2 2.9 9c-.3 0-.5.1-.6.3-.4.4-.4 1 0 1.4l4.1 4-1 5.7c0 .2 0 .4.1.6.3.5.9.7 1.4.4l5.1-2.7 5.1 2.7c.1.1.3.1.5.1h.2c.5-.1.9-.6.8-1.2l-1-5.7 4.1-4c.2-.1.3-.3.3-.5z"></path>
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
      </div>`;
        })
        .join("")}
      </div>
  </section>`;
};
export default FavoritePage;
