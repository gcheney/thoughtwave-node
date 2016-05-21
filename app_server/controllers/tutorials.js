/* GET tutorial list page */
module.exports.index = function(req, res) {
    res.render('tutorials', { title: 'Coder Tutorials - A place to teach, learn, and grow' });
};

/* GET tutorial view page */
module.exports.read = function(req, res) {
    res.render('tutorials/read', { title: 'Coder Tutorials - View' });
};

/* GET tutorial create page */
module.exports.create = function(req, res) {
    res.render('tutorials/create', { title: 'Coder Tutorials - Create a new tutorial' });
};
