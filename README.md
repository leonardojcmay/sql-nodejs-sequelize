**<h1>SQL no Node.js com Sequelize</h1>**

Iniciando projeto:
```
yarn add express pg pg-hstore sequelize

yarn add sequelize-cli -D

yarn add nodemon -D
```

Documentação sequelize:
https://sequelize.org/v5/

Crianda database:
```
yarn sequelize db:create
```

Criando tabela users:
```
yarn sequelize migration:create --name=create-users
```

Ajusta todos os dados no arquivo criado e depois rodar o comando:
```
yarn sequelize db:migrate
```

Desfazendo a ultima migrate:
```
yarn sequelize db:migrate:undo
```

Feito cadastro de usuarios

Relacionamentos de tabelas

usuario pode ter varios endereços
um para muitos

um usuario pode ter muitos endereços

