import "../styles/details.css";
import CONFIG from "../globals/config";

const Details = (resto) => `
    <div class="detail">
    <div>
    <h1>${resto.name}</h1>
    <svg class="" viewBox="0 0 128 24" width="68" height="12" aria-label="">
    ${Array(Math.floor(resto.rating))
    .fill()
    .map(
      (_, i) => `
          <path  fill="#FFC107" d="M22 10.1c.1-.5-.3-1.1-.8-1.1l-5.7-.8L12.9 3c-.1-.2-.2-.3-.4-.4-.5-.3-1.1-.1-1.4.4L8.6 8.2 2.9 9c-.3 0-.5.1-.6.3-.4.4-.4 1 0 1.4l4.1 4-1 5.7c0 .2 0 .4.1.6.3.5.9.7 1.4.4l5.1-2.7 5.1 2.7c.1.1.3.1.5.1h.2c.5-.1.9-.6.8-1.2l-1-5.7 4.1-4c.2-.1.3-.3.3-.5z" transform="translate(${
  26 * i
} 0)"></path>
        `,
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
 <span class="rating">${resto.rating}</span>
 <span class="review">(${resto.customerReviews.length} reviews)</span>
    </div>
<div class="detail-img">
    <div class="detail-img-resto">
    <img src="${CONFIG.BASE_IMAGE_URL}${resto.pictureId}" alt="${resto.name}" />
    <button id="favorite-button">
      <svg viewBox="0 0 24 24"  class="">
        <path
          fill="#ffffff"
          d="M19.665 6.346a5.018 5.018 0 00-3.417-1.34c-1.27 0-2.491.478-3.417 1.34l-.84.802-.859-.812A5.019 5.019 0 007.72 5a5.019 5.019 0 00-3.412 1.336c-1.899 1.773-1.579 4.508-.01 6.43A101.233 101.233 0 0011.99 20s5.995-5.143 7.674-7.224c1.679-2.08 1.879-4.657 0-6.43z"
        ></path>
        <path
          fill="#DF2E38"
          clip-rule="evenodd"
          d="M3.968 5.969A5.519 5.519 0 017.72 4.5c1.392 0 2.734.525 3.752 1.469l.004.003.513.486.501-.479a5.519 5.519 0 013.758-1.474c1.395 0 2.739.527 3.758 1.474l.002.003c1.042.984 1.519 2.207 1.49 3.475-.027 1.257-.55 2.525-1.444 3.633-.869 1.077-2.82 2.91-4.52 4.45a184.435 184.435 0 01-3.149 2.78l-.068.06-.326-.38.326.38-.323.277-.326-.275a101.716 101.716 0 01-7.731-7.27l-.014-.014-.013-.015c-1.673-2.051-2.098-5.1.056-7.113l.002-.001zm8.02 13.373a182.874 182.874 0 002.874-2.544c1.718-1.553 3.604-3.332 4.414-4.336.784-.972 1.201-2.033 1.223-3.027.022-.984-.34-1.935-1.176-2.725a4.519 4.519 0 00-3.075-1.205c-1.143 0-2.242.431-3.074 1.204l-1.18 1.13L10.79 6.7A4.519 4.519 0 007.72 5.5c-1.141 0-2.24.43-3.072 1.202-1.637 1.53-1.428 3.941.025 5.733a100.704 100.704 0 007.316 6.907z"
        ></path>
      </svg>
    </button>
  </div>
  <div class="detail-info">
  <h3>Information</h3>
  <h4>Address</h4>
  <p>${resto.address}, ${resto.city}</p>
  <h4>Categories</h4>
  <p>${resto.categories.map((category) => category.name).join(", ")}</p>
  <h4>Menu</h4>
  <p>${resto.menus.foods.map((food) => food.name).join(", ")}</p>
  <p>${resto.menus.drinks.map((drink) => drink.name).join(", ")}</p>
 
  </div>
  </div>
  <div class="detail-desc">
  <h3>Description</h3>
  <p>${resto.description}</p>
  </div>
  <div class="detail-review">
 <h3>Reviews</h3>
 <div class="rating-review">
 <h4>${resto.rating}</h4>
 <span>(${resto.customerReviews.length} reviews)</span>
 </div>
 <div id="review-list">
 ${resto.customerReviews
    .map(
      (review) => `<div class="review-item">
  <h4>${review.name}</h4>
      <div>
      <p>${review.date}</p>
      <p>
      ${review.review}</p>
      </div>
      </div>`,
    )
    .join("")}
 </div>
  </div>
  <div class="comment-review">
  <button id="review-button">Leave a Review</button>
  </div>
  <div id="review-modal">

  </div>
  <div id="success-modal"></div>
    </div>`;
export default Details;
