
const { Router } = require("express");
const RestaurantsController = require("../Controllers/RestaurantsController");
const authMiddleware = require("../middlewares/authMiddleware")

const routes = Router();

routes.post("/public/restaurants", RestaurantsController.registerRestaurant);
routes.post("/public/login", RestaurantsController.loginRestaurant);
routes.get("/public/restaurants", RestaurantsController.listRestaurant);
routes.get("/public/restaurants/:id", RestaurantsController.listRestaurantId);

routes.put("/restaurants/:id", authMiddleware, RestaurantsController.updateRestaurantId);
routes.delete("/restaurants/:id", authMiddleware, RestaurantsController.deleteRestaurant);

module.exports = routes;