const { Model, DataTypes } = require('sequelize');

class Tech extends Model {
    // comando sequelize conectando com o banco de dados
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
        }, {
                sequelize,
                tableName: 'techs', // o sequelize tenta achar a tabela pluralizando automatico, isso ira fazer ele forçar a ir na table techs
            })
    }

    // criando um relacionamento entre as tabelas users e techs
    static associate(models) {
        this.belongsToMany(models.User, { foreignKey: 'tech_id', through: 'user_techs', as: 'users' }); // Uma tech pertence a muitos users. Throught: nome da tabela que ira relacionar as tabeças tech e user
    }
}

module.exports = Tech;