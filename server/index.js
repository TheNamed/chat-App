const express = require('express');
const http = require('http');
const io = require('socket.io');
const fsExtra = require('node-fs-extra');

const app = express();

const locationOfFile = __dirname.replace('\server', '/client');

fsExtra.copy(locationOfFile, __dirname + '/public', (err) => {
  if (err) {
    console.error(err);
  }
});

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {

});

app.listen(3000, () => {
  console.log('Server is now running!');
});