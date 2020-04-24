module.exports = {
    dialect: 'postgres',
    host: '192.168.99.100',
    username: 'postgres',
    password: 'docker',
    database: 'sqlnode',
    define: {
        timestamps: true, // faz com que toda tabela contenha um created_at e updated_at preenchendo automatico
        underscored: true, // define o nome das tabelas e colunas Snake Case exmplo_table
    },
};