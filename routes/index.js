var express = require('express');
var router = express.Router();
var ProductController = require('../controllers/product');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('layout/index.html',{});
  css(req, res);
});

router.post('/new-record', function(req, res, next) {
  ProductController.createProduct(req, res, next);
});

function css (request, response) {
  if (request.url.indexOf(".css") !== -1){
    var file = fs.readFileSync(`.${request.url}`, {'encoding' : 'utf8'});
    response.writeHead(200, {'Content-Type' : 'text/css'});
    response.write(file);
    response.end();
  }
}

module.exports = router;
