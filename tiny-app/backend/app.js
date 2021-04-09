//1initiate express 

const express = require('express');

//1 initiate app
const app = express(); 

//2 --make a config file inside of backend create keys.js file 
//2 add mongoose 
const mongoose = require('mongoose'); 

const db = require('./config/keys').mongoURI; 

//5
const questions = require('./routes/api/questions'); 

//6
//anything that comes through the application we want the req and res to be in json format
app.use(express.json())
//4
mongoose
  .connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(()=>console.log("WORKS"))
  .catch(err=>console.log(err))

  //1 create a simple route to test if everything is working
  app.get('/', (req, res) => res.send("This working")); 
  //5
app.use('/api/questions', questions);

//1 connect our ports 
//1 which ever port is being used or 5000
const port = process.env.PORT || 5000; 
app.listen(port, () => console.log(`Server is serving on port ${port}`)); 

//3 now go to mongodb website to set up the database 