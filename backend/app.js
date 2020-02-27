var cors = require('cors');
var express = require('express');
var bodyParser = require("body-parser");


var app = express();
var config = require('./config.js');

const { Pool } = require('pg')
const pool = new Pool({
  user: config.user,
  host: config.host,
  database: config.database,
  password: config.password,
  port: config.port,
  ssl: config.ssl
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
    if (err) {
      res.send(err);
    }
    res.send(response.rows);
  });
});

app.get('/users/:name', function(req, res) {
  pool.query("SELECT * FROM users where user_name='"+req.params.name+"';", (err, response) => {
    if (err) {
      res.send(err);
    }
    res.send(response.rows);
  });
});

app.post('/users', function(req, res) {
  var user = req.body.user_name;
  var pass = req.body.password;
  if (user == null || pass == null) {
    res.status(400).json('empty fields');
  } else {
    pool.query("SELECT COUNT(*) FROM users WHERE user_name = '" + user + "';", (err, response) => {
      if (err){
        res.send(err);
      }
      if (response.rows[0].count == 0) {
        pool.query("INSERT INTO users (user_name, password) VALUES ('"+user+"', '"+pass+"');", (err, response) => {
        if (err){
          res.send(err);
        }
        res.send(response);
        });
      } else {
        res.status(400).json('existing user')
      }
    });
  }
});
app.delete('/users', function(req, res) {
  var user = req.body.user_name;
  var pass = req.body.password;
  if (user == null || pass == null) {
    res.status(400).json('empty fields');
  } else {
    pool.query("SELECT COUNT(*) FROM users WHERE user_name = '" + user + "';", (err, response) => {
      if (err){
        res.send(err);
      }
      if (response.rows[0].count != 0) {
        pool.query("DELETE FROM users where user_name = '"+user+"' and password = '"+pass+"';", (err, response) => {
        if (err){
          res.send(err);
        }
        res.send(response);
        });
      } else {
        res.status(400).json('no such user')
      }
    });
  }
});

// Competitions endpoint
app.get('/competitions', function(req, res) {
  pool.query("SELECT * FROM competitions;", (err, response) => {
    if (err) {
      res.send(err);
    }
    res.send(response.rows);
  });
});

app.post('/competitions', function(req, res) {
  var comp = req.body.comp_name;
  var numProb = req.body.num_of_problems;
  if (comp == null | numProb == null) {
    res.status(400).json('empty fields');
  } else {
      pool.query("SELECT COUNT(*) FROM competitions WHERE comp_name = '" + comp + "';", (err, response) => {
      if (err){
        res.send(err);
      }
      if (response.rows[0].count == 0) {
        pool.query("INSERT INTO competitions (comp_name, num_of_problems) VALUES ('"+comp+"', '"+numProb+"');", (err, response) => {
        if (err){
          res.send(err);
        }
        res.send(response);
        });
      } else {
        res.status(400).json('existing comp')
      }
    });
  }
});
app.delete('/competitions', function(req, res) {
  var comp = req.body.comp_name;
  if (comp == null) {
    res.status(400).json('empty fields');
  } else {
    pool.query("SELECT COUNT(*) FROM competitions WHERE comp_name = '" + comp + "';", (err, response) => {
      if (err){
        res.send(err);
      }
      if (response.rows[0].count != 0) {
        pool.query("DELETE FROM competitions where comp_name = '"+comp+"';", (err, response) => {
        if (err){
          res.send(err);
        }
        res.send(response);
        });
      } else {
        res.status(400).json('no such competition')
      }
    });
  }
});

// Scores endpoint
app.get('/scores', function(req, res) {
  pool.query("SELECT * FROM scores;", (err, response) => {
    if (err) {
      res.send(err);
    }
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

app.get('/scores/:name/:comp', function(req, res) {
    pool.query("SELECT problems FROM scores where user_name='"+req.params.name+"' and comp='"+req.params.comp+"';", (err, response) => {
      if (err) {
        res.send(err);
      }
      var problems = JSON.parse(response.rows[0].problems.split("\"(").join("[").split(")\"").join("]").split("{").join("[").split("}").join("]"));
      var sorted = problems.sort(function(a, b){
        return b[0] - a[0];
      })
      res.send(problems);
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

module.exports = app;
