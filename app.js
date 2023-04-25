require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;
app.use(express.json());

require('./routes/register/index.js')({app:app});
require('./routes/login/index.js')({app:app});
require('./routes/dashboard/index.js')({app:app});

app.get('/',(req,res) => {
  console.log("hello");
});

app.listen(port || 3000, ()=>{
  console.log(`Server Runs in http://localhost:${port}`);
});

module.exports = app;