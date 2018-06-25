var express = require('express');
var Product = require('../model/Product.js');
var router = express.Router();
var admin = require("firebase-admin");
var ProductController = require('../controllers/product');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('layout/index.ejs',{}); 
  insertData();
});

function insertData(){
var db = admin.database();
var ref = db.ref("server/saving-data/fireblog");
var usersRef = ref.child("users");
usersRef.set({
  alanisawesome: {
    date_of_birth: "June 23, 1912",
    full_name: "Alan Turing"
  },
  gracehop: {
    date_of_birth: "December 9, 1906",
    full_name: "Grace Hopper"
  }
});
}

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
