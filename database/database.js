const Sequelize = require("sequelize");
const connection = new Sequelize('guiaperguntas','root','Kvothe1995@.',{
    host:'localhost',
    dialect: 'mysql'
});


module.exports = connection;
