const showLoading = (count) => `
      <div class="loading">
        <div class="container-loading">
          ${Array(count)
    .fill()
    .map(
      () => `
                <div class="card">
                  <div class="card-image"></div>
                  <div class="card-content">
                    <div class="card-title"></div>
                    <div class="card-rating"></div>
                    <div class="card-city"></div>
                  </div>
                </div>
              `,
    )
    .join("")}
        </div>
      </div>
    `;

const hideLoading = () => {
  const loading = document.querySelector(".loading");
  loading.style.display = "none";
};

export { showLoading, hideLoading };
