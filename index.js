const express = require("express");
const server = express()
const port = 5000

server.get("/api/main/user",(req,res)=>{
    res.send("<h1>Q.  What is Express?</h1> <p>Ans.  Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.</p>")
})

server.listen(port,()=>{
    try{
        console.log("server in live on port 5000");
    }
    catch(err)
    {
        console.log('Error found'+err);
    }
})