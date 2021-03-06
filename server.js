const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Use apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});

// const fs = require('fs');
// const apiRoutes = require('./routes/apiRoutes');
// const htmlRoutes = require('./routes/htmlRoutes');

// // The require() statements will read the index.js files in each of the directories indicated. This mechanism works the same way as directory navigation does in a website: If we navigate to a directory that doesn't have an index.html file, then the contents are displayed in a directory listing. But if there's an index.html file, then it is read and its HTML is displayed instead. Similarly, with require(), the index.js file will be the default file read if no other file is provided, which is the coding method we're using here.


// // path is a node moduel that provides utilities for working with file and directory paths.
// const path = require('path');

// // ports 80 and 443 are commonly used for http:// and https://

// // requires information from animals json
// const { animals } = require('./data/animals');
// // used to add express to project.
// const express = require('express');

// // adjusts port based on need.
// const PORT = process.env.PORT || 3001;

// //used to instantiate the server
// const app = express();

// //routes to public folder
// app.use(express.static('public'));
// // parse incoming string or array data
// app.use(express.urlencoded({ extended: true }));
// // parse incoming JSON data
// app.use(express.json());

// // This is our way of telling the server that any time a client navigates to <ourhost>/api, the app will use the router we set up in apiRoutes. If / is the endpoint, then the router will serve back our HTML routes.
// app.use('/api', apiRoutes);
// app.use('/', htmlRoutes);


// // filter functionality
// // function filterByQuery(query, animalsArray) {
// //     let personalityTraitsArray = [];
// //     // Note that we save the animalsArray as filteredResults here:
// //     let filteredResults = animalsArray;
// //     if (query.personalityTraits) {
// //       // Save personalityTraits as a dedicated array.
// //       // If personalityTraits is a string, place it into a new array and save.
// //       if (typeof query.personalityTraits === 'string') {
// //         personalityTraitsArray = [query.personalityTraits];
// //       } else {
// //         personalityTraitsArray = query.personalityTraits;
// //       }
// //       // Loop through each trait in the personalityTraits array:
// //       personalityTraitsArray.forEach(trait => {
// //         // Check the trait against each animal in the filteredResults array.
// //         // Remember, it is initially a copy of the animalsArray,
// //         // but here we're updating it for each trait in the .forEach() loop.
// //         // For each trait being targeted by the filter, the filteredResults
// //         // array will then contain only the entries that contain the trait,
// //         // so at the end we'll have an array of animals that have every one 
// //         // of the traits when the .forEach() loop is finished.
// //         filteredResults = filteredResults.filter(
// //           animal => animal.personalityTraits.indexOf(trait) !== -1
// //         );
// //       });
// //     }
// //     if (query.diet) {
// //       filteredResults = filteredResults.filter(animal => animal.diet === query.diet);
// //     }
// //     if (query.species) {
// //       filteredResults = filteredResults.filter(animal => animal.species === query.species);
// //     }
// //     if (query.name) {
// //       filteredResults = filteredResults.filter(animal => animal.name === query.name);
// //     }
// //     // return the filtered results:
// //     return filteredResults;
// //   }
// // function filterByQuery(query, animalsArray) {
// //     let filteredResults = animalsArray;
// //     if (query.diet) {
// //       filteredResults = filteredResults.filter(animal => animal.diet === query.diet);
// //     }
// //     if (query.species) {
// //       filteredResults = filteredResults.filter(animal => animal.species === query.species);
// //     }
// //     if (query.name) {
// //       filteredResults = filteredResults.filter(animal => animal.name === query.name);
// //     }
// //     return filteredResults;
// //   }

// // route to animals 

// // app.get('/api/animals', (req, res) => {
// //     let results = animals;
// //     console.log(req.query)
// //     res.json(results);
// //   });

// // takes in the id and array of animals and returns a single animal object.
// // function findById(id, animalsArray) {
// //   const result = animalsArray.filter(animal => animal.id === id)[0];
// //   return result;
// // }


// // function createNewAnimal(body, animalsArray) {
// //   // body.length is equal to the number of objects stored
// //   console.log(body);
// //   // our function's main code will go here!
// //   const animal = body;

// //   // return finished code to post route for response
// //   animalsArray.push(animal);

// //   return animal;
// // }

// // function createNewAnimal(body, animalsArray) {
// //   const animal = body;
// //   animalsArray.push(animal);
// //   fs.writeFileSync(
// //     path.join(__dirname, './data/animals.json'),

// //     //null means we don't want to edit any of our existing data. The 2 indicates we want to create white space between our values for readablility
// //     JSON.stringify({ animals: animalsArray }, null, 2)
// //   );
// //   return animal;
// // }

// // //validates post request data.
// // function validateAnimal(animal) {
// //   if (!animal.name || typeof animal.name !== 'string') {
// //     return false;
// //   }
// //   if (!animal.species || typeof animal.species !== 'string') {
// //     return false;
// //   }
// //   if (!animal.diet || typeof animal.diet !== 'string') {
// //     return false;
// //   }
// //   if (!animal.personalityTraits || !Array.isArray(animal.personalityTraits)) {
// //     return false;
// //   }
// //   return true;
// // }



// //old post data


// //   app.post('/api/animals', (req, res) => {

// //     // req.body is where our incoming content will be

// //     console.log(req.body);
// //     // set id based on what the next index of the array will be
// //   req.body.id = animals.length.toString();


// //    // add animal to json file and animals array in this function
// //    const animal = createNewAnimal(req.body, animals);

// //   res.json(req.body);
// // });




// // app.get('*', (req, res) => {
// //   res.sendFile(path.join(__dirname, './public/index.html'));
// // });

// //used to instantiate the server
// app.listen(PORT, () => {
//   console.log(`API server now on port ${PORT}!`);
// });