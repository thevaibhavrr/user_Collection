const express = require("express");
const bodyParser = require("body-parser");
const validator = require("validator");
const User = require("./model/user");
require("./db/mongoose");
const userRouter = require('./route/user')




const app = express();
const Port = process.env.PORT || 8000;


app.use(bodyParser.json());
app.use(userRouter)

// const router = new express.Router()
// app.use(router)

// router.get('/home',(req,res)=>{
//     res.send('this is vainbha')
// })





app.listen(Port, () => {
  console.log("server is running on" + Port);
});
