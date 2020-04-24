const User = require('../models/User');

module.exports = {
    // metodo store para armazenar um usuario
    async store(req, res) {
        // enviando name e email na requisição
        const { name, email } = req.body;

        // criando um novo usuario no banco de dados
        const user = await User.create({ name, email });

        // retornando em json os dados do usuario
        return res.json(user);
    }
}