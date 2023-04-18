import SuccessNotification from "../components/succes";
import Dicodingresto from "../data/dicoding-resto";

const handleReview = (detailrestodata) => {
  document.addEventListener("click", (event) => {
    if (event.target && event.target.id === "review-button") {
      const modals = document.querySelector("#modals");
      modals.style.display = "block";
    }
  });

  const close = document.querySelector(".close");
  close.addEventListener("click", () => {
    const modals = document.querySelector("#modals");
    if (modals.style.display === "block") {
      modals.style.display = "none";
    }
  });

  const submitbtn = document.querySelector("#submit-button");

  submitbtn.addEventListener("click", async (event) => {
    event.preventDefault();
    const name = document.querySelector("#name").value;
    const review = document.querySelector("#review").value;

    const reviewdata = {
      id: detailrestodata.id,
      name,
      review,
    };
    const result = await Dicodingresto.addReview(reviewdata);

    if (result) {
      const modals = document.querySelector("#modals");
      modals.style.display = "none";
      const reviewContainer = document.querySelector("#success-modal");
      reviewContainer.innerHTML = SuccessNotification();
      setTimeout(() => {
        reviewContainer.innerHTML = "";
      }, 1000);
    }
  });
};

export default handleReview;
