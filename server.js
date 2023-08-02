const express = require('express');
const bodyParser = require('body-parser');
const movieRoutes = require('./router/movieRoutes');
const fs = require('fs');
const cors=require('cors');

const app = express();
const port = 6010; 


app.use(bodyParser.json());
app.use(cors())


app.use('/api/movies', movieRoutes);

   

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


  