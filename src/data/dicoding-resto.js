import API_ENDPOINT from "../globals/api-endpoint";
class Dicodingresto {
  static async allRestaurants() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }
  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
  static async addReview(review) {
    const response = await fetch(API_ENDPOINT.REVIEW, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(review),
    });
    const responseJson = await response.json();
    return !responseJson.error;
  }
}
export default Dicodingresto;
