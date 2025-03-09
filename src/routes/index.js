const express = require("express");
const restaurantRoutes = require("./restaurant");
const productRoutes = require("./products");
const buyersRoutes = require("./buyers")
const ordersRoutes = require("./orders")

const router = express.Router();

router.use(restaurantRoutes);
router.use(productRoutes);
router.use(buyersRoutes);
router.use(ordersRoutes);

module.exports = router;
