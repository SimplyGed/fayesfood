var express = require('express');
var router = express.Router();


router.get('/api', function (req, res, next) {
  res.status(200).send(JSON.stringify({ 'message': 'success' }));
});

module.exports = router;
