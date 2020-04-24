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
    }
}

module.exports = User;