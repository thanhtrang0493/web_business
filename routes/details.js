var express = require('express');
var router = express.Router();

/* GET details page. */
router.get('/details.ejs', function(req, res) {
  res.render('layout/details.ejs'); 
});

module.exports = router;