import "../styles/favorite.css";
import CONFIG from "../globals/config";

const style = `
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
height: 50vh;
`;
const FavoritePage = (restos) => `
  <section id="list-resto">
      <div class="title-resto">
      <h2>Favorite Saya (${restos.length > 0 ? restos.length : "Belum ada favorite"}) </h2>
      </div>
      
    
      <div class="list-content-resto">    
      ${
        restos.length === 0
          ? `<div class="empty-favorite" style="${style}" >Tidak ada resto untuk ditampilkan</div>`
          : restos
              .map(
                (resto) => `
              <div class="cards-gallery">
              <div class="img-resto">
              <a id="button-img"  href="#/detail/${resto.id}">
              <picture>
              <source type="image/webp" data-srcset="${CONFIG.BASE_IMAGE_URL_LARGE}${resto.pictureId}">
              <source type="image/jpeg" data-srcset="${CONFIG.BASE_IMAGE_URL_LARGE}${resto.pictureId}">
              <source type="image/webp" data-srcset="${CONFIG.BASE_IMAGE_URL_SMALL}${resto.pictureId}">
              <source type="image/jpeg" data-srcset="${CONFIG.BASE_IMAGE_URL_SMALL}${resto.pictureId}">
                    <source media="(max-width: 600px)" data-srcset="${CONFIG.BASE_IMAGE_URL_SMALL}${resto.pictureId}">
        <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL_LARGE}${resto.pictureId}" alt="${resto.name}" />
        </picture>
            </a>
          
              </div>
              <div>
                <a id="button-title"  href="#/detail/${resto.id}">
                  <div>${resto.name}</div>
                </a>
                <div>
                <svg class="" viewBox="0 0 128 24" width="68" height="12" aria-label="">
                ${Array(Math.floor(resto.rating))
                  .fill()
                  .map(
                    (_, i) => `
                      <path  fill="#FFC107" d="M22 10.1c.1-.5-.3-1.1-.8-1.1l-5.7-.8L12.9 3c-.1-.2-.2-.3-.4-.4-.5-.3-1.1-.1-1.4.4L8.6 8.2 2.9 9c-.3 0-.5.1-.6.3-.4.4-.4 1 0 1.4l4.1 4-1 5.7c0 .2 0 .4.1.6.3.5.9.7 1.4.4l5.1-2.7 5.1 2.7c.1.1.3.1.5.1h.2c.5-.1.9-.6.8-1.2l-1-5.7 4.1-4c.2-.1.3-.3.3-.5z" transform="translate(${
                        26 * i
                      } 0)"></path>
                    `
                  )
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
          </div>`
              )
              .join("")
      }
   
      </div>
  </section>`;
export default FavoritePage;
