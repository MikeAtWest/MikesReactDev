//Set up an Express Web server.

/* eslint-disable no-console */

import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev.js';


const port = 3000;
const app = express(); //Create an instance of Express.
const compiler = webpack(config); //Create an instance of Webpack.

//tell Express to use Webpack as middleware.
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require("webpack-hot-middleware")(compiler));

//Send all requests from our root folder to the index.html file.
// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, '../src/index.html'));
// })

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/' + req.originalUrl));
})

app.get('/users', function(req, res) {
  // Hard coding for simplicity. Pretend this hits a real database
  res.json([
    {"id": 1,"firstName":"Bob","lastName":"Smith","email":"bob@gmail.com"},
    {"id": 2,"firstName":"Tammy","lastName":"Norton","email":"tnorton@yahoo.com"},
    {"id": 3,"firstName":"Tina","lastName":"Lee","email":"lee.tina@hotmail.com"}
  ]);
});

//Listen for requests, display any errors, otherwise open browser and display localhost.
app.listen(port, function (err) {
  if (err) {
    console.log(err);
  }
  else {
    open('http://localhost:' + port);
  }
})

