const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

const uri = "mongodb+srv://harry123:harryjack1214@cluster0.7trlh.mongodb.net/Shop?retryWrites=true&w=majority";
mongoose.connect(process.env.MONGODB_URI || uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log(` 🚀 ==> MongoDB connection established successfully.`)
});

const itemsRouter = require('./routes/items-route');

app.use('/uploads', express.static('uploads'));
app.use('/items', itemsRouter);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.listen(PORT, () => {
    console.log(` 🚀 ==> Server is running on Port: ${PORT}`)
});
