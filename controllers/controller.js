const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, '../movies.json');


const readDataFromFile = () => {
  try {
    const data = fs.readFileSync(dataFilePath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
};


const writeDataToFile = (data) => {
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf8');
};


exports.getAllMovies = (req, res) => {
  const movies = readDataFromFile();
  res.json(movies);
};

exports.updateMovie = (req, res) => {
    const movies = readDataFromFile();
  
  
    const movieId = req.params.id;
    console.log(movieId)
  
   
    const movieToUpdate = movies.find((movie) => movie.id === Number(movieId));
  console.log(movieToUpdate)

    if (!movieToUpdate) {
      return res.status(404).json({ message: 'Movie not found' });
    }
  
   
    movieToUpdate.video = !movieToUpdate.video;
  
  
    writeDataToFile(movies);
  
   
    res.status(200).json(movies);
  };
  
