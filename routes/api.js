var express = require('express');
var router = express.Router();
var fs = require("fs");

var swiftMsg = "";

var block1 = ""; 
var block2 = "";
var block3 = "";
var block4 = "";
var block5 = "";

var isTrueBlock1 = false;
var isTrueBlock2 = false;
var isTrueBlock3 = false;
var isTrueBlock4 = false;
var isTrueBlock5 = false;

var mtTypes = [
  {
    "id": "700",
    "description": "Issue of a Documentary Credit"
  },
  {
    "id": "720",
    "description": "Transfer of a Documentary Credit"
  },
  {
    "id": "730",
    "description": "Acknowledgment"
  }
];

var mtFieldSpecification = [
  {
    "mtId": "700",
    "fieldId": "20",
    "description": "Documentary Credit Number"
  },
  {
    "mtId": "700",
    "fieldId": "50",
    "description": "Applicant"
  },
  {
    "mtId": "700",
    "fieldId": "59",
    "description": "Beneficiary"
  },
  {
    "mtId": "720",
    "fieldId": "20",
    "description": "Documentary Credit Number"
  },
  {
    "mtId": "720",
    "fieldId": "50",
    "description": "Applicant"
  },
  {
    "mtId": "720",
    "fieldId": "59",
    "description": "Beneficiary"
  },
];

if(isTrueBlock1){
  var ContentBlock1 
  swiftMsg = swiftMsg.concat(ContentBlock1);
}
if(isTrueBlock2){
  var ContentBlock2
  swiftMsg = swiftMsg.concat(ContentBlock2);
}
if(isTrueBlock3){
  var ContentBlock3
  swiftMsg = swiftMsg.concat(ContentBlock3);
}
if(isTrueBlock4){
  var ContentBlock4
  swiftMsg = swiftMsg.concat(ContentBlock4);
}
if(isTrueBlock5){
  var ContentBlock5
  swiftMsg = swiftMsg.concat(ContentBlock5);
}

/* Get the JSON file */
router.get('/msg/', function(req, res, next) {
  var stream = fs.createWriteStream("./swiftMsg.txt");
  stream.once('open',function(){
    stream.write("Message");
    stream.end();
  });
});

module.exports = router;
