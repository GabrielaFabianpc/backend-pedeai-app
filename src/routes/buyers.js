const {Router} = require("express");
const BuyersController = require("../Controllers/BuyersController")

const routes = Router();

routes.post("/public/buyers", BuyersController.registerBuyers);
routes.get("/public/buyers", BuyersController.listBuyers);
routes.get("/public/buyers/:id", BuyersController.listBuyersId);
routes.put("/public/buyers/:id", BuyersController.updateBuyers);
routes.delete("/public/buyers/:id", BuyersController.deleteBuyers);

module.exports = routes;