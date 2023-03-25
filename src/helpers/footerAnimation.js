const footerbuttonopen = document.querySelectorAll(".footer-btn-open");
const footerbuttonclose = document.querySelectorAll(".footer-btn-close");

const footerbuttonopenanimation = () => {
  footerbuttonopen.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      const parent = event.target.closest(".footer-sec");
      parent.querySelector("ul").style.display = "block";
      parent.querySelector(".footer-btn-open").style.display = "none";
      parent.querySelector(".footer-btn-close").style.display = "block";
    });
  });
  footerbuttonclose.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      const parent = event.target.closest(".footer-sec");
      parent.querySelector("ul").style.display = "none";
      parent.querySelector(".footer-btn-close").style.display = "none";
      parent.querySelector(".footer-btn-open").style.display = "block";
    });
  });
};

export default footerbuttonopenanimation;
