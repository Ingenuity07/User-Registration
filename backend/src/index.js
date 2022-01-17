const express=require("express");
const cors= require('cors')
require('./DB/mongoose')
const userRouter = require('./Routes/userRoutes')
const app= express();

const port = process.env.PORT||8000 

app.use(express.json()) 
app.use(cors())
app.use(userRouter) 

app.listen(port,()=>{
    console.log("server is up on port "+port)
})