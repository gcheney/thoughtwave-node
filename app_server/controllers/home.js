/* GET 'home' page */
module.exports.index = function(req, res) {
    res.render('home', {title: 'Thought Wave - Home'});
};

/* GET 'about' page */
module.exports.about = function(req, res) {
    res.render('home/about', {
        title: 'Thought Wave - About',
        header: {
            title: 'About Thought Wave',
            subtitle: 'This is who we are.'
        },
        content: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe nostrum ullam eveniet pariatur voluptates odit, fuga atque ea nobis sit soluta odio, adipisci quas excepturi maxime quae totam ducimus consectetur?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius praesentium recusandae illo eaque architecto error, repellendus iusto reprehenderit, doloribus, minus sunt. Numquam at quae voluptatum in officia voluptas voluptatibus, minus!</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestiae debitis nobis, quod sapiente qui voluptatum, placeat magni repudiandae accusantium fugit quas labore non rerum possimus, corrupti enim modi! Et.</p>'
    });
};

/* GET 'contact' page */
module.exports.contact = function(req, res) {
    res.render('home/contact', {title: 'Thought Wave - Contact'});
};