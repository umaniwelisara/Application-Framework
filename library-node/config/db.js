var mongoose = require('mongodb').mongoose;
var url = "mongodb://localhost:27017/library";

mongoose.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Database created!");
    db.close();
});

mongoose.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("library");
    dbo.createCollection("authors", function(err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    });
});

mongoose.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("library");
    dbo.createCollection("books", function(err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    });
});