/* GET thoughts index page */
module.exports.index = function(req, res) {
    res.render('thoughts', { title: 'Thought Wave - Thoughts' });
};

/* GET thoughts view page */
module.exports.read = function(req, res) {
    res.render('thoughts/read', { title: 'Thought Wave - ' });
};

/* GET thoughts create page */
module.exports.create = function(req, res) {
    res.render('thoughts/create', { title: 'Thought Wave - Create' });
};
