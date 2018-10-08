import 'babel-polyfill';
import 'babel-register';
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import bodyParser from 'body-parser';
import App from './src/app.jsx';

const app = express();
const port = process.env.PORT || 8005;

app.use(bodyParser.json());
app.use(express.static('build/public'));

app.get('*', (req, res) => {

  const context = {}

  const content = ReactDOMServer.renderToString(
    <StaticRouter location={ req.url } context={ context }>
      <App />
    </StaticRouter>
  );

  const html = `<html>
    <head>
    </head>
    <body>
      <div id="app">
        ${content}
      </div>
      <script src="client_bundle.js"></script>
    </body>
  </html>`

  res.send(html)
})

app.listen(port, () => console.log(`Listening to ${port}`));


// <!-- Page Title -->
// <title>Miracle | Responsive Multi-Purpose HTML5 Template</title>

// <link rel="shortcut icon" href="images/favicon.png" />

// <!-- Meta Tags -->
// <meta charset="utf-8">
// <meta name="description" content="Miracle | Responsive Multi-Purpose HTML5 Template">
// <meta name="author" content="SoapTheme">

// <meta name="viewport" content="width=device-width, initial-scale=1.0">

// <!-- Theme Styles -->
// <link rel="stylesheet" href="css/bootstrap.min.css">
// <link rel="stylesheet" href="css/font-awesome.min.css">
// <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700' rel='stylesheet' type='text/css'>
// <link href='http://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,300italic' rel='stylesheet' type='text/css'>
// <link href='http://fonts.googleapis.com/css?family=Playfair+Display:400,400italic' rel='stylesheet' type='text/css'>
// <link href='http://fonts.googleapis.com/css?family=Dosis:400,300,500,600,700' rel='stylesheet' type='text/css'>
// <link rel="stylesheet" href="css/animate.min.css">
// <!-- Magnific Popup core CSS file -->
// <link rel="stylesheet" href="components/magnific-popup/magnific-popup.css">

// <!-- Main Style -->
// <link id="main-style" rel="stylesheet" href="css/style.css">

// <!-- Updated Styles -->
// <link rel="stylesheet" href="css/updates.css">

// <!-- Custom Styles -->
// <link rel="stylesheet" href="css/custom.css">

// <!-- Responsive Styles -->
// <link rel="stylesheet" href="css/responsive.css">