const express = require("express");

const router = express.Router();

//Todo api

//Todos array 
let todos = [{
    name:"to learn express",
    by:"1st August"
}]

//Get todos
router.get("/getTodos",(req,res) => {
    res.json(todos);
})

//Post todos
router.post("/addTodos",(req,res) => {
    const {name,by} = req.body;

    todos.push({
        name,
        by
    })

    res.status(200).json(todos);
})

module.exports = router;
