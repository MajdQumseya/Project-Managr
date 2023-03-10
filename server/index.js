const express = require('express');
const colors = require('colors');
require('dotenv').config();
const cors = require('cors');
const {graphqlHTTP} = require("express-graphql");
const schema = require('./schema/schema');
const connectDB = require ('./config/db');
const port = process.env.PORT || 5000;

const app = express();

//Connect to database
connectDB()

app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV == 'development' ? 'true' : 'false'
}))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})