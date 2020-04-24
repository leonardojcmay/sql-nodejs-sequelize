**<h1>SQL no Node.js com Sequelize</h1>**

**Iniciando projeto:**
```
yarn add express pg pg-hstore sequelize

yarn add sequelize-cli -D

yarn add nodemon -D
```

**Documentação sequelize:**
https://sequelize.org/master/manual/getting-started.html

**Crianda database:**
```
yarn sequelize db:create
```

**Criando tabela users:**
```
yarn sequelize migration:create --name=create-users
```

Ajustar todos os dados no arquivo criado e depois rodar o comando:
```
yarn sequelize db:migrate
```

Desfazendo a ultima migrate:
```
yarn sequelize db:migrate:undo
```

**Tabelas banco de dados:**
<br>- addresses
<br>- techs
<br>- users
<br>- user_techs

**Relacionamentos de tabelas:**
<br>**OneToMany:** User pode ter muitos Addresses
<br>**ManyToMany:** Uma Tech pode ter muitos Users / Um User pode ter muitas Techs

**Criando tabela de techs e user_techs:**
```
yarn sequelize migration:create --name=create-techs

yarn sequelize migration:create --name=create-user_techs
```

Ajusta todos os dados no arquivo criado e depois rodar o comando:
```
yarn sequelize db:migrate
```

**ReportController.js:** gerado um relatório utilizando Query.

Encontrar todos os usuarios que tem email que termina com @xxx.com.br
<br>Desses usuarios eu quero buscar todos que moram na rua "Rua xxx"
<br>Desses usuarios eu quero buscar as tecnologias que começam com React
