const buttonhamburger = document.querySelector("#button-hamburger");
const closebutton = document.querySelector(".close-button");
const shadow = document.querySelector(".shadow-nav");
const buttonOpen = () => {
  buttonhamburger.addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector(".nav-hidden").style.width = "50%";
    document.querySelector(".shadow-nav").style.display = "block";
  });
};
const buttonClose = () => {
  closebutton.addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector(".nav-hidden").style.width = "0";
    shadow.style.display = "none";
  });
  shadow.addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector(".nav-hidden").style.width = "0";
    shadow.style.display = "none";
  });
};
const onSticky = () => {
  const nav = document.querySelector(".nav-desktop");
  const sticky = nav.offsetTop;
  const scrollCallBack = window.addEventListener("scroll", () => {
    if (window.pageYOffset > sticky) {
      nav.classList.add("sticky");
    } else {
      nav.classList.remove("sticky");
    }
  });
  window.addEventListener("scroll", scrollCallBack);
};
const navanimation = () => {
  buttonOpen();
  buttonClose();
  onSticky();
};
export default navanimation;
