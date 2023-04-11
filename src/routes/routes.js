import Home from "../pages/Home";
import Favorite from "../pages/Favorite";
import Detail from "../pages/Detail";
const routes = {
  "/": Home, // default page
  "/favorite": Favorite,
  "/detail/:id": Detail,
  //   "/detail/:id": Detail,
};

export default routes;
