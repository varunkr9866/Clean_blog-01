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

// const http = require('http');
// const fs = require('fs');

// const hompage =fs.readFileSync('index.html');
// const aboutPage =fs.readFileSync('about.html');
// const contentPage =fs.readFileSync('content.html');
// const notFoundPage =fs.readFileSync('notFound.html');

// let server = http.createServer((req,res) =>{
//     if (req.url === '/about' ) {
//         res.end(hompage);
        
//     }
//      else if (req.url === '/content' ) {
//         res.end(aboutPage);
//     } 
//     else if (req.url === '/' ) {
//         res.end(contentPage);
//     } else {
//         res.writeHead(404)
//         res.end(notFoundPage);
//     } 
// });

//  server.listen(3300,()=>{
//     console.log('Application is running in port number 3300');
    
// });

// METHOD-3

const express = require('express')
const path = require('path')

const app = express()

app.listen(3300,() =>{
    console.log("app listening in port 3200");
    
});

app.get('/',(req,res) =>{
    res.sendFile(path.resolve(__dirname,'index.html'))
});

app.get('/about',(req,res) =>{
    res.sendFile(path.resolve(__dirname,'about.html'))
});

app.get('/content',(req,res) =>{
    res.sendFile(path.resolve(__dirname,'content.html'))
});

