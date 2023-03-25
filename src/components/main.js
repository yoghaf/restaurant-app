import navanimation from "../helpers/navAnimation";
import footerbuttonopenanimation from "../helpers/footerAnimation";
import onFavorite from "../helpers/favAnimation";
import tabindex from "../helpers/tabIndex";

const main = () => {
  navanimation();
  footerbuttonopenanimation();
  onFavorite();
  tabindex();
};

export default main;
