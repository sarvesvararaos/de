const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json(),cors())

// define a simple route
app.get('/', (req, res) => {
    var number;

(function repeat() {
   number = Math.random();
   setTimeout(repeat, 3000);
})();
    res.json({"message": number});
});

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});