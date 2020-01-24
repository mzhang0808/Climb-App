var cors = require('cors');
var express = require('express');
var app = express();

app.use(cors());

app.get('/hello', function(req, res) {
  res.send("hello world");
});

var PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});
