const {Buyers} = require("../models")

class BuyersController {
    async registerBuyers(req, res) {
        try {
            const { name, phone } = req.body;
            const userAlreadyExists = await Buyers.findOne({ where: { name, phone } });

            if (userAlreadyExists) {
                return res.status(400).json({ message: "Esse usuário já existe!" });
            }

            if (!name || !phone ) {
                return res.status(400).json({ message: "Campo Name ou Telefone não podem estar vazios!" });
            }

            const createdBuyer = await Buyers.create({ name, phone });

            return res.status(200).json(createdBuyer)
        } catch (error) {
            console.error("Erro ao cadastrar produto:", error); 
            return res.status(500).send({message: "Não foi possível cadastrar usuário!"})
        }
    }

    async listBuyers(req,res){
        try {
            const buyers = await Buyers.findAll();
            return res.status(200).json(buyers)
        } catch (error) {
            return res.status(500).send({message: "Não foi possível listar usuários!"})
        }
    }

    async listBuyersId(req, res){
        try {
            const {id} = req.params;
            const buyersId = await Buyers.findOne({where: {id}});
            return res.status(200).json(buyersId)
        } catch (error) {
            return res.status(500).send({message: "Não foi possível listar usuário!"})
        }
    }

    async updateBuyers(req, res){
        const {id} = req.params;
        const {name, phone} = req.body;
        const buyersBody = {
            name,
            phone
        };

        try {
            await Buyers.update(buyersBody,{where: {id}});
            const buyersUpdate = await Buyers.findOne({where: {id}});
            return res.status(200).json(buyersUpdate);
        } catch (error) {
            return res.status(500).send({message: "Não foi possível atualizar usuário!"})
        }
    }

    async deleteBuyers(req,res){
        try {
            const {id} = req.params;
            const buyerDelete = await Buyers.destroy({where: {id}});
            return res.status(200).send({message: "Usuário deletado com sucesso"})
        } catch (error) {
            return res.status(500).send({message: "Não foi possível deletar usuário!"})
        }
    }
}   

module.exports = new BuyersController();