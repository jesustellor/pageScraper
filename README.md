# pageScraper
Building and api with data from website of choice.

## Getting Started
After cloning the repository, run the following command to install the dependencies:
- `npm install`
this will install nodemon, axios, and cheerio.

## Running the Server
create a script in package.json called `start` and add the following to it:
- `nodemon index.js`
```  
    "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon index.js"
  }, 
```
now you can run the -- `npm start` to start the server.

### URL Endpoints
// localhost:3000 <br>
// localhost:3000/news <br>
// localhost:3000/news/newspaperName - `pick a valid name from the array`