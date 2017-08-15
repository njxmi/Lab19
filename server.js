var http = require('http'); 
var lyricsModule = require('./lyricsModule');

function songQuote() {
    //var randomLyric = Math.floor(Math.random() * lyricsModule.quotes.length);	
	return lyricsModule.quotes[Math.floor(Math.random() * lyricsModule.quotes.length)];	
}
	songQuote();
	console.log("test");
	//console.log(lyricsModule.quotes); this one printed everything in quotes array
	console.log(songQuote(lyricsModule.quotes)); //this one works


http.createServer(function(request, response) { 
response.writeHead(200, {"Content-type": "text/plain"}); 
response.write(songQuote(lyricsModule.quotes));
response.end(); 
}).listen(8888);

