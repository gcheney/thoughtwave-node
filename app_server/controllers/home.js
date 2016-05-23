/* GET 'home' page */
module.exports.index = function(req, res) {
    res.render('home', {title: 'Thought Wave - Home'});
};

/* GET 'about' page */
module.exports.about = function(req, res) {
    res.render('home/about', {title: 'Thought Wave - About'});
};

/* GET 'contact' page */
module.exports.contact = function(req, res) {
    res.render('home/contact', {title: 'Thought Wave - Contact'});
};