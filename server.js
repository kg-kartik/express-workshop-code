const express = require("express");

//Routes file

const todoRoute = require("./routes");

const app = express();

const PORT = 5000;

app.use(express.json());


app.post("/",(req,res) => {
    //Req - request body
    //res - response returns
    const name = req.body.name;

    res.status(200).json({
        name:name
    })

})

app.use("/todos",todoRoute);

app.listen(PORT,() => {
    console.log(`It is running on port ${PORT}`);
})
