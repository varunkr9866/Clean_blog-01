//METHOD-1

// const http = require('http');

// const server = http.createServer((req,res) =>{
//     console.log(req.url);
//     res.end("Hello Node.js")
// });

// server.listen(3300,()=>{
//     console.log('Server is running at port 3300');
    
// })

// METHOD-2
const http = require('http');

let server = http.createServer((req,res) =>{
    if (req.url === '/about' ) {
        res.end('About Page');
        
    }
     else if (req.url === '/content' ) {
        res.end('the Content Page');
    } 
    else if (req.url === '/' ) {
        res.end('the Home Page');
    } else {
        res.writeHead(404)
        res.end('Page Not Found');
    } 
});

 server.listen(3300,()=>{
    console.log('Application is running in port number 3300');
    
});
