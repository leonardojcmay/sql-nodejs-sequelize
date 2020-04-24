const { Model, DataTypes } = require('sequelize');

class User extends Model {
    // comando sequelize conectando com o banco de dados
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
        }, {
                sequelize
            })
    }

    // criando um relacionamento entre as tabelas users e addresses
    static associate(models) {
        this.hasMany(models.Address, { foreignKey: 'user_id', as: 'addresses' }) // hasMany: diz que o usuario tem muitos endereços
        this.belongsToMany(models.Tech, { foreignKey: 'user_id', through: 'user_techs', as: 'techs' }); // Um user pertence a muitas techs. Throught: nome da tabela que ira relacionar as tabeças tech e user
    }
}

module.exports = User;