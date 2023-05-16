const  db = require("../../config/dbConfig")

module.exports = (sequelize, DataTypes) => {

    const order = sequelize.define("order", {
       
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          }, 
       
        status: { 
            type: DataTypes.STRING
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            // references: {
            //   model: db.users,
            //   key: "id",
            // },
            references: db.users,
            referencesKey: "id",
            
          },
          product_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: db.product,
            referencesKey: "id",
            
          },    
    })

    return order

}