const { Orders } = require("../models");
const jwt = require("jsonwebtoken");
require("dotenv").config();

class OrdersController {
    async registerOrders(req, res) {
        try {
            const { product_id, amount, total_price, total_service_price, restaurant_id, buyer_id } = req.body;


            const authHeader = req.headers.authorization;

            const token = authHeader.split(" ")[1];

            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            const restaurantIdFromToken = decoded.restaurantId;

            if (parseInt(restaurant_id) !== restaurantIdFromToken) {
                return res.status(403).json({ error: "Acesso negado!" });
            };

            const createdOrder = await Orders.create({ product_id, amount, total_price, total_service_price, restaurant_id, buyer_id });

            return res.status(200).json(createdOrder);
        } catch (error) {
            return res.status(500).send({ message: "Não foi possível realizar pedido!" })
        }
    }

    async listOrdersIdRestaurant(req, res) {
        const authHeader = req.headers.authorization;

        const { id } = req.params;

        const token = authHeader.split(" ")[1];

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const restaurantIdFromToken = decoded.restaurantId;

        if (parseInt(id) !== restaurantIdFromToken) {
            return res.status(403).json({ error: "Acesso negado!" });
        };

        try {
            const orders = await Orders.findAll({ where: { restaurant_id: id } });
            return res.status(200).json(orders);
        } catch (error) {
            return res.status(500).send({ message: "Não foi possível listar pedidos!" })
        }
    }

    async updateOrders(req, res) {
        const authHeader = req.headers.authorization;

        const { id } = req.params;

        const token = authHeader.split(" ")[1];

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const restaurantIdFromToken = decoded.restaurantId;

        if (parseInt(id) !== restaurantIdFromToken) {
            return res.status(403).json({ error: "Acesso negado!" });
        };
        const { product_id, amount, total_price, total_service_price, restaurant_id, buyer_id } = req.body;
        const ordersBody = {
            product_id,
            amount,
            total_price,
            total_service_price,
            restaurant_id,
            buyer_id
        }
        try {
            await Orders.update(ordersBody, { where: { id } });
            const orderUpdate = await Orders.findOne({ where: { id } });
            return res.status(200).json(orderUpdate)
        } catch (error) {
            console.error("Erro ao atualizar produto:", error); // Log para entender o que aconteceu
            return res.status(500).send({ message: "Não foi possível atualizar pedido!" })
        }
    }

    async deleteOrder(req, res) {
        try {
            const { id } = req.params;
            const deleteOrder = await Orders.destroy({ where: { id } });
            return res.status(200).send({ message: "Pedido deletado com sucesso!" })
        } catch (error) {
            return res.status(500).send({ message: "Não foi possível deletar pedido!" })
        }
    }

}

module.exports = new OrdersController();