const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());


app.get('/', (req, res) => {
    res.json({ message: "Server is running on port 5000" })
});

const allData = require(".//data/data.json");

app.get("/allData", (req, res) => {
    res.send(allData);
});

app.get("/allData/:id", (req, res) => {
    const id = req.params.id;
    const chef = allData[0].chefs.find((item) => item.id == id);
    res.send(chef);
  });


app.listen(5000, () => {
    console.log("Server is running on port 5000");
});