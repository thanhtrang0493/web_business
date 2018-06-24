module.exports = {
    createProduct: function(req, res, next) {
        // Xy ly logic, nodejs
        res.render('list.html');
    },

    updateProduct: function(req, res, next) {
        res.send('update product');
    }
}