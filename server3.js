var express = require('express');
var app = express();
app.get("/url", (req, res, next) => {
    res.json([{id: 101, name: "Fight Club", year: 1999, rating: 8.1},
    {id: 102, name: "Inception", year: 2010, rating: 8.7},
    {id: 103, name: "The Dark Knight", year: 2008, rating: 9},
    {id: 104, name: "12 Angry Men", year: 1957, rating: 8.9}]);

    console.log("Server running on port 3000")
});

app.listen(3000);