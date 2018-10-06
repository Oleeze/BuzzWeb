const express = require('express');
const bodyParser = require('body-parser')
const path = require('path')

const app = express();
const port = process.env.PORT || 8002;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, '../public/dist')))

app.listen(port, () => console.log(`Listening to ${port}`));