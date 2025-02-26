const express = require("express");
const {users} = require("./data/users.json");
// importing routes
const usersRouter = require("./routes/users");
const booksRouter = require("./routes/books");
const app = express()

const port = 8081;
app.use(express.json());

app.get("/",(req, res)=>{
    res.status(200).json({
        message: "Server is up and running "
    })
})

app.use("/users", usersRouter)
app.use("/books",booksRouter)

app.all("*",(req,res)=>{
    res.status(404).json({
        message: "This route does not exist"
    })
})
app.listen(port, ()=>{
    console.log(`server is running at port ${port}`)
})






