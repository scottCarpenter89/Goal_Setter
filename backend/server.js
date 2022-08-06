const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
/** Note: you must type npm run server in the terminal to reinitialize the server**/

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/goals', require('./routes/goalRoutes'));

app.listen(port, () => console.log(`Sever started on port ${port}`));