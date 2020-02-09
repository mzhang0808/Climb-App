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


// Users endpoint
app.get('/users', function(req, res) {
  pool.query("SELECT * FROM users;", (err, response) => {
    if (err) throw err;
    res.send(response.rows);
  });
});

app.get('/users/:name', function(req, res) {
  pool.query("SELECT * FROM users where user_name='"+req.params.name+"';", (err, response) => {
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

// Competitions endpoint
app.get('/competitions', function(req, res) {
  pool.query("SELECT * FROM competitions;", (err, response) => {
    if (err) throw err;
    res.send(response.rows);
  });
});

app.post('/competitions', function(req, res) {
  var comp = req.body.comp_name;
  var numProb = req.body.num_of_problems;
  pool.query("INSERT INTO competitions (comp_name, num_of_problems) VALUES ('"+comp+"', '"+numProb+"');", (err, response) => {
    if (err){
      res.send(err);
    }
    res.send(response);
  });
});

// Scores endpoint
app.get('/scores', function(req, res) {
  pool.query("SELECT * FROM scores;", (err, response) => {
    if (err) throw err;
    res.send(response.rows);
  });
});

app.post('/scores', function(req, res) {
  var user = req.body.user_name;
  var comp = req.body.comp;
  pool.query("UPDATE users SET current_comp = '"+ comp +"' where user_name = '"+ user +"';");
  pool.query("INSERT INTO scores (user_name, comp, problems) VALUES ('"+user+"', '"+comp+"', ARRAY[]::completed[]);", (err, response) => {
    if (err){
      res.send(err);
    }
    res.send(response);
  });
});

app.patch('/scores/:name/:comp', function(req, res) {
  var problem = req.body.problem;
  var attempts = req.body.attempts;

  pool.query("UPDATE scores SET problems[CARDINALITY(problems)+1] = ROW("+ problem +","+ attempts +") where user_name= '"+ req.params.name + "' and comp= '"+ req.params.comp +"';", (err, response) => {
    
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
