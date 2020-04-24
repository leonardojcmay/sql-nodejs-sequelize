const { Model, DataTypes } = require('sequelize');

class Address extends Model {
    // comando sequelize conectando com o banco de dados
    static init(sequelize) {
        super.init({
            zipcode: DataTypes.STRING,
            street: DataTypes.STRING,
            number: DataTypes.INTEGER,
        }, {
                sequelize
            })
    }

    // criando um relacionamento entre as tabelas users e addresses
    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' }) // belongsTo: pertence a um usuario
    }
}

module.exports = Address;