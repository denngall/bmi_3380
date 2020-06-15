const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname));
app.set('view engine', 'pug');

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/bmi.html");
});

app.post("/", function (req, res) {

    var weight = Number(req.body.weight);
    var height = Number(req.body.height);
  
    var bmi = weight /(height ** 2);

    res.render('index', { bmi: bmi.toFixed(4)});
});

app.listen(3000, function () {
    console.log('server started on port 3000');
});