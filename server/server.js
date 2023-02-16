// express need to make config file run in terminal
//  npm init --yes 
//makes a package.json file (only run if package.json is not made)
// if package.json is there then npm install --yes 
// then run    npm install express 
// creates node_modules ----not not modify this folder do not add to source control
// now make a new .gitignore 

//steps in order
//  npm init --yes 
//npm install express 
// make a new .gitignore with this info maybe more 
        // node_modeules/
        // .DS_Store


//Require Express 
const express = require('express')

const app = express()

// Heroku assigns us a unique PORT 
// use 5001 for local host devolopment 
const port = process.env.PORT || 5001

//show where files are stored
app.use(express.static('server/public'))

//tell where to listen for request
app.listen(port, () => { 
    console.log(`listening on port ${port}`)
})

// node server/server.js ----run this to start up 
// can run localhost:5001 in browser now to view the applicaiton 