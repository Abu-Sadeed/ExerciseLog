const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://sadeed:kissme013@cluster0.9cvyz.gcp.mongodb.net/exercise?retryWrites=true&w=majority";

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
const connection  = mongoose.connection;
connection.once('open', () => {
  console.log("Connected to mongoDB database")
})

const userRoute = require('./routes/users');
const exerciseRoute = require('./routes/exercises');

app.use('/exercises', exerciseRoute);
app.use('/user', userRoute);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

