/**
 * A static server implementation without Express
 * https://developer.mozilla.org/en-US/docs/Learn/Server-side/Node_server_without_framework
 * 
 *   map request to static resource from root directory:
 * 
 *      http://127.0.0.1:8125/ -> index.html (default)
 *      http://127.0.0.1:8125/about.html -> about.html
 *      http://127.0.0.1:8125/* (not found) -> 404.html
 * 
 *
 */

var http = require('http');
var fs = require('fs');
var path = require('path');

const rootDir="public";

http.createServer(function (request, response) {
    console.log('request ', request.url);

    var filePath = '.' + request.url;
    if (filePath == './') {
        filePath = rootDir+'/index.html';
    }else{
        filePath = rootDir+'/'+ request.url;
    }

    var extname = String(path.extname(filePath)).toLowerCase();
    var mimeTypes = { // 1) checks mime content type to set headers in response
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
        '.wav': 'audio/wav',
        '.mp4': 'video/mp4',
        '.woff': 'application/font-woff',
        '.ttf': 'application/font-ttf',
        '.eot': 'application/vnd.ms-fontobject',
        '.otf': 'application/font-otf',
        '.wasm': 'application/wasm'
    };

    var contentType = mimeTypes[extname] || 'application/octet-stream';

   // filePath= rootDir+filePath;
    fs.readFile(filePath, function(error, content) {
        if (error) {
            if(error.code == 'ENOENT') {
                fs.readFile(rootDir+'/404.html', function(error, content) {
                    response.writeHead(404, { 'Content-Type': 'text/html' });
                    response.end(content, 'utf-8');
                });
            }
            else {
                response.writeHead(500);
                response.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
            }
        }
        else {
            response.writeHead(200, { 'Content-Type': contentType }); //2) write data in response and then close it (response.end())
            response.end(content, 'utf-8');
        }
    });

}).listen(8125);
console.log('Server running at http://127.0.0.1:8125/');