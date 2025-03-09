const {Router} = require("express");
const OrdersController = require("../Controllers/OrdersController");
const authMiddleware = require("../middlewares/authMiddleware");


const routes = Router();

routes.post("/restaurant/orders", authMiddleware, OrdersController.registerOrders);
routes.get("/restaurant/orders/:id", authMiddleware, OrdersController.listOrdersIdRestaurant);
routes.put("/restaurant/orders/:id", authMiddleware, OrdersController.updateOrders);
routes.delete("/restaurant/orders/:id", OrdersController.deleteOrder);

module.exports = routes;