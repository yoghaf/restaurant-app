import navanimation from "../helpers/navAnimation";
import footerbuttonopenanimation from "../helpers/footerAnimation";
import onFavorite from "../helpers/favAnimation";
import tabindex from "../helpers/tabIndex";
import Scroll from "../helpers/Scroll";

const main = () => {
  navanimation();
  footerbuttonopenanimation();
  onFavorite();
  tabindex();
  Scroll();
};

export default main;
