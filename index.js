const express = require('express');
const { connection } = require('./db');
const { userRouter } = require('./Router/userRouter');
const { postRouter } = require('./Router/postRouter');
var cors = require('cors')



const app = express()
app.use(express.json());
app.use(cors())
app.use('/users',userRouter)
app.use('/posts',postRouter)


app.listen(8080,async()=>{

    try{
        await connection;
        console.log('The port is running at the port 8080')
    } catch(err){
        console.log(err)
    }
})