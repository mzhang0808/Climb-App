var cors = require('cors');
var express = require('express');

var app = express();

const { Pool, Client } = require('pg')
const pool = new Pool({
  user: 'qjyqteuktgdkur',
  host: 'ec2-23-21-13-88.compute-1.amazonaws.com',
  database: 'd995g1c339k78d',
  password: '02f4dcfe5c71902626923dfce5086de3c814000204268df9ac04eece3d8100ae',
  port: 5432,
  ssl: true
})

app.use(cors());

app.get('/hello', function(req, res) {
  res.send("hello world");
});

app.get('/users', function(req, res) {
  pool.query('SELECT * FROM users;', (err, res) => {
    if (err) throw err;
    console.log(JSON.stringify(res.rows));
  });
});



var PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});
