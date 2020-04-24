const User = require('../models/User');
const Tech = require('../models/Tech');

module.exports = {

    // listando todas techs de um usuario
    async index(req, res) {
        const { user_id } = req.params;

        // listando todas as tecnologias deste usuario
        const user = await User.findByPk(user_id, {
            //include: { association: 'techs', through: { attributes: [] } } // Fazendo com que não retorne os dados da tabela user_techs
            include: { association: 'techs' }
        })

        return res.json(user.techs);
    },

    // metodo store para armazenar um tech
    async store(req, res) {
        const { user_id } = req.params;
        const { name } = req.body; // name da tech

        // verificando se usuario existe
        const user = await User.findByPk(user_id);

        // se nao encontrar o usuario
        if (!user) {
            return res.status(400).json({ error: 'User not found' });
        }

        // se encontrar o usuario
        // se nao encontrar a tech no banco, vai criar a tech e se utilizar [tech, created] o created vai retornar true
        const [tech] = await Tech.findOrCreate({ // Se não encontrar a tech irá criar uma nova tech
            where: { name }
        })

        // adicionando uma tech a um usuario
        await user.addTech(tech);

        return res.json(tech);
    },

    // retirando uma tech do usuario
    async delete(req, res) {
        const { user_id } = req.params;
        const { name } = req.body; // name da tech

        // verificando se usuario existe
        const user = await User.findByPk(user_id);

        // se nao encontrar o usuario
        if (!user) {
            return res.status(400).json({ error: 'User not found' });
        }

        const tech = await Tech.findOne({ // Encontrando uma tech pelo name dela
            where: { name }
        })

        // removendo tech
        await user.removeTech(tech);

        // nao retorna nada, pois a tech foi removida
        return res.json();

    }
};