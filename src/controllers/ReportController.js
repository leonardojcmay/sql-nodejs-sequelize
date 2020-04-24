const { Op } = require('sequelize'); // importando os operadores do sequelize
const User = require('../models/User');

// Controle para gerar um relatorio
module.exports = {
    // Mostrando o relatorio
    async show(req, res) {
        // Encontrar todos os usuarios que tem email que termina com @rocketseat.com.br
        // Desses usuarios eu quero buscar todos que moram na rua "Rua Guilhermo Gembala"
        // Desses usuarios eu quero buscar as tecnologias que começam com React

        const users = await User.findAll({
            // Retornar apenas name e email destes users
            attributes: ['name', 'email'],
            // Encontrar todos os usuarios que tem email que termina com @rocketseat.com.br
            where: {
                email: {
                    [Op.iLike]: '%@rocketseat.com.br'// Valor da variavel como a chave do objeto
                }
            },
            // Desses usuarios eu quero buscar todos que moram na rua "Rua Guilhermo Gembala"
            // Desses usuarios eu quero buscar as tecnologiass que começam com React
            include: [
                { association: 'addresses', where: { street: 'Rua Guilhermo Gembala' } }, // endereços
                {
                    association: 'techs',
                    required: false,
                    where: {
                        name: {
                            [Op.iLike]: 'React%'
                        }
                    }
                }, // technologias
            ]

        });

        return res.json(users);
    }
};