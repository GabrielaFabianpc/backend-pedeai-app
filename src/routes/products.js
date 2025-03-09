const { Router } = require("express");
const ProductsController = require("../Controllers/ProductsController");
const authMiddleware = require("../middlewares/authMiddleware")

const routes = Router();

routes.post("/restaurant/products", authMiddleware, ProductsController.registerProduct);
routes.get("/restaurant/products", ProductsController.listProducts);

routes.get("/restaurant/products/:id", authMiddleware, ProductsController.listProductsIdRestaurant);
routes.put("/restaurant/products/:id", ProductsController.updateProduct);
routes.delete("/restaurant/products/:id", ProductsController.deleteProduct);

module.exports = routes;