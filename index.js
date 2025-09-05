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

// nhúng file static
app.use(express.static("public"));
// hết nhúng file static
route(app);
app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
});