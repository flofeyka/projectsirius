const http = require('http');
const fs = require('fs');

const requestListener = function (req, res) {
    fs.writeFile(__dirname + "editor/index.html")
        .then(contents => {
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(contents);
        })
};

const server = http.createServer(requestListener);
server.listen(8080, () => console.log('Server is running...'));