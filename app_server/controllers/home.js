/* GET home page */
module.exports.index = function(req, res) {
    res.render('home/index', { title: 'Coder Tutorials - A place to teach, learn, and grow' });
};