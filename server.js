require('dotenv').config();
require('./config/database'); // connects to db
const express = require('express');
const path = require('path'); // node modules


const app = express();
// dev port: 3001
// in production a PORT number is set in the env variables
const PORT = process.env.PORT || 3001;

//* Config
app.use(logger('dev'));
app.use(express.json());






app.listen(PORT, () => {
    console.log(`Server is running on port#: ${PORT}`);
})