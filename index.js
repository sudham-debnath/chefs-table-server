const express = require('express');

const app = express();


app.get('/', (req, res) => {
    res.json({ message: "Server is running on port 5000" })
});

const allData = require(".//data/data.json");

app.get("/allData", (req, res) => {
    res.send(allData);
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});