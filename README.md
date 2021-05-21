# Desafio

O sistema, desenvolvido utilizando NodeJS, consiste em uma api para gerenciamento de pets, possuindo informações como: nome, idade, animal (cachorro ou gato), raça, dono, telefone do dono.

## Funcionalidades

O projeto possui todas funcionalidades requeridas, sendo elas:
- Listagem
- Criação
- Edição
- Exclusão

## Rotas


- Listagem (GET in '/pet')
- Criação (POST in '/pet')
- Edição (PUT in '/pet') 
- Exclusão (DELETE in '/pet')

## Tecnologias utilizadas

### Backend
- NodeJs
- Express;
- Sequelize; 

Foi desenvolvida uma aplicação web para interação com a API, você pode encontra-la no repositório abaixo:
- [Repositório frontend](https://github.com/SPLeandro/desafio-desenvolvedor-junior)

## Deploy
Foi feito a hospedagem do backend na heroku, encontra-se no link: 
- [Heroku](https://pets-backend.herokuapp.com/)

## Como executar o projeto

### API Backend
Pré-requisitos: npm / yarn

```bash
# clonar repositório
git clone https://github.com/SPLeandro/pets-backend

# entrar na pasta do projeto
cd pets-backend

# instalar dependências
npm install

# configurar as variáveis de ambiente
É necessário configurar as variáveis de ambiente para realizar a conexão com o banco de dados. 

Sugestão: {
Crie um arquivo .env contendo:
DB_HOST=HOST
DB_PORT=PORT
DB_NAME=NAME
DB_DIALECT=(mysql recommended)
DB_USER=user
DB_PASSWORD=password
DB_ENCRYPT=false
}

# executar o projeto
npm start
```

## Observações
Por default o projeto está utilizando a API-backend hospedada na heroku, caso queira utilizar outra API, é necessário alterar a Base URL em "src/services/api.js"

## Autor

- Leandro Pereira dos Santos
- Lsaantos@outlook.com
- [Linkedin](www.linkedin.com/in/psleandro)
