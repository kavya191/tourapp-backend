const express=require('express')
require('dotenv').config()
const cors=require('cors')
const router=require('./Routes/routing')
const server=express()
server.use(express.json())
server.use(cors())
server.use(router)
server.use('/tourimage',express.static('./uploads'))
require('./Connections/dbconnection')
const port=4000 || process.env.port
server.listen(port,()=>{
    console.log(`____________Server running at port number ${port} _____________________`);
})

