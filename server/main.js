var express = require('express');
var router = express.Router();

router.get('/', function(req, res){

   res.send('GET route on r.');
});
router.post('/', function(req, res){
   res.send('POST route on r.');
});

//export this router to use in our index.js
module.exports = router;
