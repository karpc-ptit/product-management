// nhúng express
const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT;
//hết nhúng express
// nhúng views (pug)
app.set('views','./views');
app.set('view engine','pug');
// hết view
//nhúng route
const route = require("./routers/client/index.route")
// hết nhúng route
route(app);
app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
});