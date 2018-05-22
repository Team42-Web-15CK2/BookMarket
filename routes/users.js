var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([
    {id: 1, username: 'khiem'},
    {id: 2, username: 'ssssss'}
  ]);
});

module.exports = router;
