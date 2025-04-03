const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
const path = require('path');

const db = require('./config/mongoose-connection');
const ownersModel = require('./models/owners-model');

const ownersRouter = require('./routes/ownersRouter');
const productRouter = require('./routes/productRouter');
const usersRouter = require('./routes/userRouter');


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs');


app.use('/owners', ownersRouter);
app.use('/products', productRouter);
app.use('/users', usersRouter);


app.listen("3000", ()=>{
    console.log("Server is running on port 3000");
});
