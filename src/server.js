import express from "express";
import App from "../dist/ssr/app";
import React from 'react';
import { StaticRouter } from "react-router";
import reactDomServer from "react-dom/server";
const app = express();
app.use(express.static('dist'));
app.use('/images',express.static('images'));
app.get("*", (req, res) => {
    const html = reactDomServer.renderToString(
      <StaticRouter
      location={req.url}
      context={{
          name:'daniel'
      }}>
        <App />
      </StaticRouter>
    );
  res.write(`
        <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>Platzi Video</title>
                 <link rel="stylesheet" href="/css/app.css">
            </head>
            <body>
                <div id="home-container"> hola mundo${html}</div>
                <div id="modal-container"></div>
                <!-- script src="http://localhost:9000/js/app.js"></script>-->
                 <script src="/js/home.js"></script> 
            </body>
        </html>
        `);
  res.end();
});
app.listen(3000);

console.log("**********************************")
console.log("the server is running in port 3000")
