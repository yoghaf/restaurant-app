import navanimation from "../helpers/navAnimation";
import footerbuttonopenanimation from "../helpers/footerAnimation";
import onFavorite from "../helpers/favAnimation";

import Scroll from "../helpers/Scroll";

const main = () => {
  navanimation();
  footerbuttonopenanimation();
  onFavorite();
  Scroll();
};

export default main;
