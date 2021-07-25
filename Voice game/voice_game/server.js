const express=require('express');
const app=express();
const http    = require('http')
const server  = http.createServer(app)
const ss = require('socket.io-stream');
// load all the libraries for the Dialogflow part
const uuid = require('uuid');
const util = require('util');
const { Transform, pipeline } = require('stream');
const pump = util.promisify(pipeline);
const df = require('dialogflow').v2beta1;


app.use(express.static('public'));
app.set('view engine', 'ejs')

app.get('/',(req,res)=>{
	res.render('home');
});

const io  = require('socket.io')(server);
io.on('connection',socket=>{
	var authToken="abcd";
	socket.on('message',files=>{

		var audioFileStream = fs.createReadStream(files.audio);
        var params={
        }
		 const audioOption = {
				  url: 'https://api.symbl.ai/v1/process/audio',
				  headers: {
				    'Authorization': `Bearer ${authToken}`,
				    'Content-Type': 'audio/wav'
				  },
				  qs: params,
				  json: true,
		 };
        
		const responses = {
		  400: 'Bad Request! Please refer docs for correct input fields.',
		  401: 'Unauthorized. Please generate a new access token.',
		  404: 'The conversation and/or it\'s metadata you asked could not be found, please check the input provided',
		  429: 'Maximum number of concurrent jobs reached. Please wait for some requests to complete.',
		  500: 'Something went wrong! Please contact support@symbl.ai'
		}
		audioFileStream.pipe(request.post(audioOption, (err, response, body) => {
		  const statusCode = response.statusCode;
		  if (err || Object.keys(responses).indexOf(statusCode.toString()) !== -1) {
		    throw new Error(responses[statusCode]);
		  }
		  console.log('Status code: ', statusCode);
		  console.log('Body', response.body);
		  var theresponse=response.body;
		  socket.emit('audioresult',theresponse);
		}));
	});


})
server.listen(process.env.PORT || 8000);
