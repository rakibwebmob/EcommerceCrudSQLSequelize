const Sequelize = require("sequelize");

// const sequelize = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PASSWORD,
//   {
//     host: process.env.DB_HOST,
//     dialect: process.env.DB_TYPE,
//   }
// );

const sequelize = new Sequelize('sqlcurd', 'root', '123456', {
  host: 'localhost',
  dialect:'mysql' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});


sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });
 
const db = {}; 
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.users = require('../routes/user/model')(sequelize,Sequelize)
db.product = require('../routes/product/model')(sequelize,Sequelize)
db.order = require('../routes/order/model')(sequelize,Sequelize)
db.review = require('../routes/review/model')(sequelize,Sequelize)

db.users.hasMany(db.order, {
  foreignKey: "user_id",
  as: "user",
});

db.order.belongsTo(db.users,{
  foreignKey:"user_id",
  as: "user",
})
db.product.belongsTo(db.order,{
  foreignKey:"product_id",
  as: "product",
})

db.order.hasMany(db.product,{
  foreignKey:"product_id",
  as:"product"
})

// db.product.hasMany(db.review, {
//   foreignKey: 'product_id',
//   as: 'review'
// })

// db.review.belongsTo(db.product, {
//   foreignKey: 'product_id',
//   as: 'product'
// })


sequelize.sync({ force: false }).then(() => {
  console.log("yes re-sync done!");
});

module.exports = db;
