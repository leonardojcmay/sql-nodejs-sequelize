const User = require('../models/User');
const Address = require('../models/Address');

module.exports = {
    // metodo store para armazenar um endereço
    async store(req, res) {
        // pegando id do usuario
        const { user_id } = req.params;
        // dados necessarios para criação de um endereço
        const { zipcode, street, number } = req.body;

        // verificando se realmente o usuario existe
        const user = await User.findByPk(user_id);

        // se nao encontrar o usuario
        if (!user) {
            return res.status(400).json({ error: 'User not found' });
        }

        // se encontrar usuario, criar um endereço para o usuario
        const address = await Address.create({
            zipcode,
            street,
            number,
            user_id
        })

        // retornando json com a informação
        return res.json(address);
    }
};