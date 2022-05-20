const {Sequelize} = require('sequelize');
const database = new Sequelize("SampleDb","root", "PwdRoot123$",{
    host: "localhost",
    port: '3306',
    dialect:'mysql',
   // timezone:'+5:30',
})

module.exports = database;