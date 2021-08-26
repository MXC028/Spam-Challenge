// server/index.js
const express = require("express");
var fs = require('fs'); 
var _ = require('lodash');
const bodyParser = require('body-parser');
const path = require("path");
var userJSON = require('../../src/data/reports.json');


const PORT = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.put("/reports/:reportId", (req, res) => {
 // console.log(req);
  if(req.params.reportId) {

    // Check req.body.actionPerform is resolve or block and get id.
    var reportId = req.params.reportId.split(":")[1];

    if(req.body.actionPerform === "Block") {
      
      var returnedObj = _.find(userJSON.elements, {id: reportId});
  
      // Find item index using _.findIndex 
      var index = _.findIndex(userJSON.elements, {id: reportId});

      returnedObj.ticketState = "CLOSED";
  
      // Replace item at index using native splice
      userJSON.elements.splice(index, 1, returnedObj);
    
      console.log("reportId ", reportId);
      console.log("actionPerform ", req.body.actionPerform);

      // Write new changes to the reports.json file.
      fs.writeFileSync(path.resolve(__dirname, '../../src/data/reports.json'), JSON.stringify(userJSON));
      res.json({message: "Success"});
    } else {
      var returnedObj = _.find(userJSON.elements, {id: reportId});
  
      // Find item index using _.findIndex 
      var index = _.findIndex(userJSON.elements, {id: reportId});

      returnedObj.ticketState = "RESOLVED";
  
      // Replace item at index using native splice
      userJSON.elements.splice(index, 1, returnedObj);
    
      console.log("reportId ", reportId);
      console.log("actionPerform ", req.body.actionPerform);

      // Write new changes to the reports.json file.
      fs.writeFileSync(path.resolve(__dirname, '../../src/data/reports.json'), JSON.stringify(userJSON));
      res.json({message: "Success"});
    }
  } else {
    res.json({message: "Not a valid id"});
  }

});

