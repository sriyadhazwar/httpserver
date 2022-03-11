var http = require('http');

var app = http.createServer(function(req,res){
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ id:"1", name: "Yudi Krisnandi",
    age: 22
    }));
});
app.listen(4000);