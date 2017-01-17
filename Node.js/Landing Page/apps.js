var http = require('http'),
    fs = require('fs'),
    port = 6789,
    server = http.createServer( (req, res) => {
		console.log('Request URL: ', req.url);
		var file, type = 'text/html';
		switch(req.url) {
			case "/":
		  		file = 'index.html'
		  		break;
			case "/ninjas":
		 		file = 'ninjas.html'
		 		break;
			case "/dojos/new":
				file = 'dojos.html'
				break;
			case "/stylesheets/style.css":
				file = 'stylesheets/style.css'
				type = 'text/css'
				break;
			case "/images/node.png":
				file = 'images/node.png'
		  		type = 'image/png'
				break;
			default:
		 		file = null;
		 		type = null;
		}
		if (file) {
	        var encode = (type === 'image/png') ? '' : 'utf8';
			fs.readFile(file, encode, (err, data) => {
				res.writeHead(200, {'Content-Type': type});
				res.write(data);
	            res.end();
			})
		}
		else {
	    	res.writeHead(404);
	        res.end("<h1>File not found!</h1>");
	    }
	});

server.listen(port, () => {
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    console.log(`Running in localhost at port ${port}`);
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
});
