const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

//Import Routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/post');

dotenv.config();

mongoose.connect(
    process.env.DB_CONNECT, { useNewUrlParser: true },
    () => console.log('Connected to db!'));

app.use(express.json());

//Route Middlewares
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);

app.get('/', (req, res) => {
    res.status(200).send('Hello World');
});

app.listen(3000, () => console.log('Server running at port 3000...'));