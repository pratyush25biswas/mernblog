const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');

require('dotenv').config();

const app  = express();
const port = process.env.PORT ;

app.use(cors());
app.options("*",cors())
// app.use(cors({
//   origin: '*'
// }));
// app.use(cors({
//   methods: ['GET','POST','DELETE','UPDATE','PUT']
// }));

app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const userroute =require('./routes/users');
app.use('/users',userroute); 
const blogroute =require('./routes/blogs');
app.use('/blogs',blogroute);

app.listen(port, () => {
    console.log('server running port '+ port);
});
