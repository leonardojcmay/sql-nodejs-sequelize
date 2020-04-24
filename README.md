**<h1>SQL no Node.js com Sequelize</h1>**

Iniciando projeto:
```
yarn add express pg pg-hstore sequelize

yarn add sequelize-cli -D

yarn add nodemon -D
```

Documentação sequelize:
https://sequelize.org/master/manual/getting-started.html

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

Criando tabela de endereços:
```
yarn sequelize migration:create --name=create-addresses
```

Relacionamento muitos para muitos
armazenar tecnologias que um usuario trabalha

Criando tabela de techs
```
yarn sequelize migration:create --name=create-techs

yarn sequelize migration:create --name=create-user_techs
```

Ajusta todos os dados no arquivo criado e depois rodar o comando:
```
yarn sequelize db:migrate
```

Querys mais complexas

