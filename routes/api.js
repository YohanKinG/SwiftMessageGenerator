var express = require('express');
var router = express.Router();
var fs = require("fs");
var msgObj = require("./MTTypes.json");

var swiftMsg = "";

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

function createMsg(msgObj){
  if(msgObj.isTrueBlock1){
    var ContentBlock1 = `{1:${msgObj.block1}}`;
    swiftMsg = swiftMsg.concat(ContentBlock1);
  }
  if(msgObj.isTrueBlock2){
    var ContentBlock2 = `{2:${msgObj.mtId}${msgObj.block2}}`;
    swiftMsg = swiftMsg.concat(ContentBlock2);
  }
  if(msgObj.isTrueBlock3){
    var ContentBlock3 = '';
    swiftMsg = swiftMsg.concat(ContentBlock3);
  }
  if(msgObj.isTrueBlock4){
    //console.log('insideif');
    var ContentBlock4 = '{4:';
    msgObj.specification.forEach(function(item){
      ContentBlock4 = ContentBlock4+('\n'+item.id+':'+item.Detail);
    });
    ContentBlock4 = ContentBlock4 + ('\n-}');
    swiftMsg = swiftMsg.concat(ContentBlock4);
    console.log(swiftMsg);
  }
  if(msgObj.isTrueBlock5){
    var ContentBlock5 = '';
    swiftMsg = swiftMsg.concat(ContentBlock5);
  }
}

/* Get the JSON file */
router.get('/msg/', function(req, res, next) {
  createMsg(msgObj);
  var stream = fs.createWriteStream("./swiftMsg.txt");
  stream.once('open',function(fd){
    stream.write(swiftMsg);
    stream.end();
  });
  res.json({"STATUS": "200 OK"});
});

module.exports = router;
