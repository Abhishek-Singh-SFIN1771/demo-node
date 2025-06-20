// HTTP Module - The http module in Node.js is used to create a server and handle HTTP requests/responses. It's backend/server-side, and used to build APIs.

 const http = require('http');

 // NOw we are goint to creatte a server
 const server = http.createServer((req, res) => 
    {
        if(req.url === '/')
            {
                res.end('Welcome to our Home page');
            }
        if(req.url === '/about')
            {
                res.end('Here our short history');
            }    
        res.end(`
            <h1>Oops!</h1>
            <p> The page you are looking for is not there </p>
            <a href = "/">  Back to Home </a>
            `)    
    });

  server.listen(3000, () => {console.log('Server running on port 3000');}); // this mthod is reposible to run our code on the desired port  