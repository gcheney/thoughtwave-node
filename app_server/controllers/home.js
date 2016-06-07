/* GET 'home' page */
module.exports.index = function(req, res) {
    res.render('home', {
        title: 'Thought Wave - Home',
        header: {
            title: 'Thought Wave',
            subtitle: 'A place to learn, share, and connect'
        },
        featuredPosts: [{
            title: 'Bernie Sanders rally draws massive crowd',
            date: 'September 18, 2015',
            category: 'Politics',
            lead: 'Senator Bernie Sanders defiantly vowed again on Sunday to take his campaign to the Democratic National Convention this summer, even as Hillary Clinton edged closer to clinching the party’s presidential nomination and the final primary contests drew near.',
            imageUrl: '/img/rally.jpg',
            author: {
                avatar: 'http://api.randomuser.me/portraits/thumb/men/58.jpg',
                name: 'Jack Johnson'
            }
        }, {
            title: 'Syria is Bleeding Silently',
            date: 'October 20, 2014',
            category: 'World',
            lead: 'Initially, the Syrian government relied mainly on its armed forces, but since 2014 local protection units made up of volunteers known as National Defence Force have come to play a larger role, gradually becoming the primary military force of the Syrian state. From the early stages, the Syrian government received technical, financial, military and political support from Russia.',
            imageUrl: '/img/syria.jpg',
            author: {
                avatar: 'http://api.randomuser.me/portraits/thumb/women/44.jpg',
                name: 'Jackie Kim'
            }
        }, {
            title: 'Apple is Making a Comeback with Zombie Steve Jobs',
            date: 'September 24, 2014',
            category: 'Technology',
            lead: 'Zombie Steve Jobs has been leading Apple on to great things this quarter, as the stocks continue to soar pending his undead announcement of the Zombiphone. This is shaping up to be an exciting week int he world of technology. ',
            imageUrl: '/img/jobs-zombie.jpg',
            author: {
                avatar: 'http://api.randomuser.me/portraits/thumb/women/48.jpg',
                name: 'Grace Morgan'
            }
        }]
    });
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
    res.render('home/contact', {
        title: 'Thought Wave - Contact',
        header: {
            title: 'Contact Us',
            subtitle: 'Send us a message to let us know your thoughts.'
        },
        lead: 'Want to get in touch with me? Fill out the form below to send me a message and I will try to get back to you within 24 hours!',
        social: {
            twitter: 'https://twitter.com/glendoncheney',
            github: 'https://github.com/gcheney/thoughtwave',
            linkedin: 'https://www.linkedin.com/in/glendon-cheney-3a680926'
        }
    });
};