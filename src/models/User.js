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
}

module.exports = User;