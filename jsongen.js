/* INDEX OF CURRENT SCRIPT 

    1. Libraries import and setup

    2. jsonFilename and savingDirectory variables 

    3. Json Schema

    4. JSON.stringify

    5. Saving with fs.writeFile

*/


// Import and setup
const fs = require('fs');
const path = require('path');

const Chance = require('chance');
const chance = new Chance();

// Defining the initial array of the json
let jsonItems = [];

// *** Name your json file here ***
const jsonFilename = "items.json";

// Output directory and complete path
const savingDirectory = 'json_file';
const savingPath = path.join(savingDirectory, jsonFilename);

// ***** JSON SCHEMA *****

//Specify the number of items you want
const numItems = 100;

for(let i = 1; i <= numItems; i++) {
    
    // Example of simple schema with increasing numbers
    /*jsonItems.push({
        "itemName": `Item ${i}`,
        "itemDescription": `Item ${i} Text description`
    });*/

    // Example of using the Chance module
    // See https://chancejs.com/ for documentation on the possibilities
    jsonItems.push({
	"idNumber": i,
        "cityName": chance.city(),
        "cityDescription": chance.paragraph()
    });
}

// stringify parameters : 
// 1st : variable to convert
// 2nd : replacer (not using it, so => null)
// 3rd : indentation
const jsonData = JSON.stringify(jsonItems, null, 2);

// writeFile parameters :
// 1st : path where to save the file
// 2nd : data to write to the file
// 3rd : encoding format
// 4th : callback function for error handling
fs.writeFile(savingPath, jsonData, 'utf8', (err) => {
    if (err){
        console.log(err);
    }else{
        console.log('Json file has been created');
    }}
);