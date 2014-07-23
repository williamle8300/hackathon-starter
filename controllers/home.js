//var AmazonProducts = require('amazon-products');

/**
 * GET /
 * Home page.
 */

exports.index = function(req, res) {
//	AmazonProducts.getProductDetail({url: 'http://www.amazon.com/dp/B0015X7HD4'}, function(err, productDetail) {
//		console.log(productDetail);
//	});
  res.render('home.html', {
    title: 'Home'
  });
};
