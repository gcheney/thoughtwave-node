/* GET thoughts index page */
module.exports.index = function(req, res) {
    res.render('posts/browse', { title: 'Thought Wave - Thoughts' });
};

/* GET thoughts view page */
module.exports.read = function(req, res) {
    res.render('posts/read', { title: 'Thought Wave - ' });
};

/* GET thoughts create page */
module.exports.create = function(req, res) {
    res.render('posts/create', { title: 'Thought Wave - Create' });
};
