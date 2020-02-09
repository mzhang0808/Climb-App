var cors = require('cors');
var express = require('express');
var bodyParser = require("body-parser");

var app = express();

const { Pool } = require('pg')
const pool = new Pool({
  user: 'xqdnhsvcdmopvx',
  host: 'ec2-54-83-55-122.compute-1.amazonaws.com',
  database: 'd1upulvgjib8qo',
  password: '864e5bcd2441c503f96b5b7fc1fb218271d5a1accd2e430ebe85126cf8249f02',
  port: 5432,
  ssl: true
})

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/hello', function(req, res) {
  res.send("hello world");
});

app.get('/users', function(req, res) {
  pool.query("SELECT * FROM users;", (err, response) => {
    if (err) throw err;
    res.send(response.rows);
  });
});

app.post('/users', function(req, res) {
  var user = req.body.user_name;
  var pass = req.body.password;
  pool.query("INSERT INTO users (user_name, password) VALUES ('"+user+"', '"+pass+"');", (err, response) => {
    if (err){
      res.send(err);
    }
    res.send(response);
  });
});

var PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});
