# Lendbuzz-Backend

To get started with the backend server, follow these steps:

Clone the repository: git clone https://github.com/SaiAditya-ctrl/Lendbuzz-Backend.git
Navigate to the project folder: cd Lendbuzz-backend

Install the dependencies: npm install
Start the server: npm start
The server will start running on port 6010, and you should see a message indicating that the server is running 

API Endpoints
The backend provides the following API endpoints:

Get All Movies
Endpoint: GET /api/movies

This endpoint returns a list of all movies from the movies.json file.

Get Movie by ID
Endpoint: GET /api/movies/:id

This endpoint retrieves a specific movie by its ID.

Update Movie
Endpoint: PUT /api/movies/:id

This endpoint allows updating the details of a movie

Error Handling
The backend is designed to handle errors gracefully. If there is an error during the API call, the server will return an error response with an appropriate status code and error message.

Dependencies
The backend uses the following dependencies:

Express.js
Body-parser
Cors








