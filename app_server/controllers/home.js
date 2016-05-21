/* GET 'home' page */
module.exports.index = function(req, res) {
    res.render('home', {title: 'About'});
};

/* GET 'about' page */
module.exports.about = function(req, res) {
    res.render('home/about', {title: 'About'});
};

module.exports.contact = function(req, res) {
    res.render('home/contact', {title: 'Contact'});
};