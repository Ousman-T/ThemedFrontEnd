require('dotenv').config();
require('./config/database'); // connects to db
const express = require('express');
const path = require('path'); // node modules
const logger = require('morgan');
const favicon = require('serve-favicon');


const app = express();
// dev port: 3001
// in production a PORT number is set in the env variables
const PORT = process.env.PORT || 3001;

//* Config
// app.use(logger('dev'));

//* Middlewares
app.use(express.json());
app.use(logger('dev'));
app.use(express.json());
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));


app.use('/api', require('./routes/contact'));


app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})





app.listen(PORT, () => {
    console.log(`Server is running on port#: ${PORT}`);
})