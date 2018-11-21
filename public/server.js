let express = require('express');
let app = express();
let mongoose = require('mongoose');

app.listen(3000);
app.use(express.static('public'));
app.use(express.static('node_modules'));

app.get("/file",function(req,res){
    fs.readFile('test.txt', function read(err, data) {
        if (err) {
            throw err;
        }
        console.log(data ); 
        res.send(data)
    });
})