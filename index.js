'use strict'
/*
In the node.js intro tutorial (http://nodejs.org/), they show a basic tcp
server, but for some reason omit a client connecting to it.  I added an
example at the bottom.
Save the following server in example.js:
*/


const dotenv = require ('dotenv');
dotenv.config (); 
var path = require('path');
var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var history = require('connect-history-api-fallback');

//app.use(history());

/*http.listen(process.env.PORT_DEV,`${process.env.local_url}`, function(){
	console.log(`listening on  ${process.env.local_url}:${process.env.PORT_DEV}`);
  });*/
  //app.use(history());
  app.use(express.static(__dirname + '/public/angular'));
  //app.use(express.bodyParser());
  app.get('/download', function(req, res){
	  //console.log("aqui");
	//return res.send(__dirname + '/public/angular');
	var file = __dirname + '/upload-folder/app-release.apk';
	res.download(file); // Set disposition and send it.
  });



app.listen(process.env.PORT_DEV,process.env.local_url,()=>{
	console.log('Server Express Ready!');
})