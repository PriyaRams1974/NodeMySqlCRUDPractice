const {Sequelize} = require('sequelize');
const db = require("../middleware/db.connection");

const detailSchema = db.define('details', {
    id:{type: Sequelize.INTEGER, primaryKey:true, autoincrement: true, allowNull:false},
    name:{type: Sequelize.STRING, allownull: false},
    createdAt: Sequelize.DATE,
   updatedAt: Sequelize.DATE
},{
       freezeTableName: true,
});

module.exports = detailSchema
