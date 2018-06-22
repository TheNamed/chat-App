const express = require('express');
const http = require('http');
const io = require('socket.io');
const fsExtra = require('node-fs-extra');

const app = express();

// This is the location of the folder on the client folder so it can copy all the files in there to public.
const folderLocation = __dirname.replace('\server', '/client');

fsExtra.copy(folderLocation, __dirname + '/public', (err) => {
  if (err) {
    console.error(err);
  }
});

app.use(express.static(__dirname + '/public'));

app.listen(3000, () => {
  console.log('Server is now running!');
});