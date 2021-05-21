const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./src/routes/routes.js');
const sequelize = require ('./src/database/database');

const http = require('http');

app.use(express.json());
app.use(cors());

app.use(routes);

sequelize.sync({force:false}).then ( ()=> {
    const port = process.env.PORT || 3003;
    app.set("port", port);
    const server = http.createServer(app);
    server.listen(port);
})

sequelize
    .authenticate()
    .then(() => {
    console.log("Connection has been established successfully.");
    })
    .catch((err) => {
    console.error("Unable to connect to the database:", err);
    });