const productRoutes = require("./product.route");
const homeRoutes = require("./home.route");
module.exports = (app) => {
    //Dùng pug
    app.use("/",homeRoutes);
    app.use("/products",productRoutes);
  
}