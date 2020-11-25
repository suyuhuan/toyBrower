const http = require("http");

const server = http.createServer((req,res)=> {
    console.log(req.headers);
    res.setHeader('Content-Type','text/html');
    res.setHeader('X-Foo','bar');
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end(`<html>
    <body>
        <div id="id" class="background">
            <div class="test">
            <div class="demo"></div>
            <div class="demo2"></div>
            </div>
            <img id="myid"/>
            <img />
        </div>
    </body>
</html>`);
})
server.listen(8080);