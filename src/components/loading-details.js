import "../styles/loading-detail.css";

const LoadingDetail = () => `
  
    <div id="loading-detail">
     <div class="menu">
     <div class="loading-title"></div>
     <div class="loading-title-content"></div>
     </div>
      <div class="container">
        <div class="loading-img"></div>
        <div class="information">
          <div class="menu">
          <div class="loading-title"></div>
          <div class="loading-title"></div>
          <div class="loading-title-content"></div>
          <div class="loading-title"></div>
          <div class="loading-title-content"></div>
          </div>
          <div class="menu">
          <div class="loading-title"></div>
       ${Array(5)
    .fill()
    .map(() => "   <div class=\"loading-title-description\"></div>")
    .join("")}
          </div>
        </div>
      </div>
      <div class="menu">
        <div class="loading-title"></div>
        ${Array(10)
    .fill()
    .map(() => "   <div class=\"loading-title-description\"></div>")
    .join("")}
      </div>
      <div class="menu">
        <div class="loading-title"></div>
        <div class="loading-title-content"></div>
      </div>
      <div class="menu">
        <div class="loading-title"></div>
        <div class="loading-title-content"></div>
        <div class="loading-title-content"></div>
      </div>
    </div>
  `;

const showLoading = () => {
  const loading = document.querySelector("#loading-detail");
  loading.style.display = "block";
};
const hideLoading = () => {
  const loading = document.querySelector("#loading-detail");
  loading.style.display = "none";
};
export { LoadingDetail, showLoading, hideLoading };
