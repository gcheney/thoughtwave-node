

/* GET thoughts index page */
module.exports.index = function(req, res) {
    var category = req.params.category;
    categoryName = category.charAt(0).toUpperCase() + category.slice(1);
    var title = 'Thought Wave - ' + categoryName;
    res.render('posts/browse', { 
        title: title,
        category: { 
            name: categoryName,
            backgroundImage: '/img/backgrounds/politics.jpg'
        },
        posts: [{
            title: 'Bernie Sanders rally draws massive crowd',
            date: 'September 18, 2015',
            category: 'Politics',
            lead: 'Senator Bernie Sanders defiantly vowed again on Sunday to take his campaign to the Democratic National Convention this summer, even as Hillary Clinton edged closer to clinching the party’s presidential nomination and the final primary contests drew near.',
            imageUrl: '/img/rally.jpg',
            author: {
                avatar: 'http://api.randomuser.me/portraits/thumb/men/58.jpg',
                name: 'Jack Johnson'
            }
        }]
    });
};

/* GET thoughts view page */
module.exports.read = function(req, res) {
    res.render('posts/read', { 
        title: 'Thought Wave - Read',
        post: {
            title: 'Zombie Steve Jobs continues meteoric rise to the top',
            subtitle: 'iPhreaks renew the march to DC',
            imageUrl: '/img/jobs-zombie.jpg',
            author: {
                username: 'Tester1',
                fullname: 'Johnny Clean Cheeks',
                avatar: 'http://api.randomuser.me/portraits/thumb/men/58.jpg',
                bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, dolor quis. Sunt, ut, explicabo, aliquam tenetur ratione tempore quidem voluptates cupiditate voluptas illo saepe quaerat numquam recusandae? Qui, necessitatibus, est! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, dolor quis. Sunt, ut, explicabo, aliquam tenetur ratione tempore quidem voluptates cupiditate voluptas illo saepe quaerat numquam recusandae? Qui, necessitatibus, est!',
                facebook: 'https://www.facebook.com/KitHaringtonFan',
                twitter: 'https://twitter.com/kanyewest?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor',
                linkedin: 'https://www.linkedin.com/in/gabenewell',
                instagram: 'https://www.instagram.com/Cashcats/',
                github: 'https://github.com/gcheney'
            },
            timestamp: 'August 24, 2014',
            content: '<p>Never in all their history have men been able truly to conceive of the world as one: a single sphere, a globe, having the qualities of a globe, a round earth in which all the directions eventually meet, in which there is no center because every point, or none, is center — an equal earth which all men occupy as equals. The airman\'s earth, if free men make it, will be truly round: a globe in practice, not in theory.</p><p>Science cuts two ways, of course; its products can be used for both good and evil. But theres no turning back from science. The early warnings about technological dangers also come from science.</p><p>What was most significant about the lunar voyage was not that man set foot on the Moon but that they set eye on the earth.</p><p>A Chinese tale tells of some men sent to harm a young girl who, upon seeing her beauty, become her protectors rather than her violators. That\'s how I felt seeing the Earth for the first time. I could not help but love and cherish her.</p><p>For those who have seen the Earth from space, and for the hundreds and perhaps thousands more who will, the experience most certainly changes your perspective. The things that we share in our world are far more valuable than those which divide us.</p><h2 class="section-heading">The Final Frontier</h2><p>There can be no thought of finishing for ‘aiming for the stars.’ Both figuratively and literally, it is a task to occupy the generations. And no matter how much progress one makes, there is always the thrill of just beginning.</p><p>There can be no thought of finishing for ‘aiming for the stars.’ Both figuratively and literally, it is a task to occupy the generations. And no matter how much progress one makes, there is always the thrill of just beginning.</p><blockquote>The dreams of yesterday are the hopes of today and the reality of tomorrow. Science has not yet mastered prophecy. We predict too much for the next year and yet far too little for the next ten.</blockquote><p>Spaceflights cannot be stopped. This is not the work of any one man or even a group of men. It is a historical process which mankind is carrying out in accordance with the natural laws of human development.</p><h2 class="section-heading">Reaching for the Stars</h2> <p>As we got further and further away, it [the Earth] diminished in size. Finally it shrank to the size of a marble, the most beautiful you can imagine. That beautiful, warm, living object looked so fragile, so delicate, that if you touched it with a finger it would crumble and fall apart. Seeing this has to change a man.</p><span class="caption text-muted">To go places and do things that have never been done before – that’s what living is all about.</span><p>Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to explore strange new worlds, to seek out new life and new civilizations, to boldly go where no man has gone before.</p><p>As I stand out here in the wonders of the unknown at Hadley, I sort of realize there’s a fundamental truth to our nature, Man must explore, and this is exploration at its greatest.</p><p>Placeholder text by <a href="http://spaceipsum.com/">Space Ipsum</a>. Photographs by <a href="https://www.flickr.com/photos/nasacommons/">NASA on The Commons</a>.</p>',
            comments: [{
                author: {
                    avatar: 'http://api.randomuser.me/portraits/thumb/men/46.jpg',
                    fullname: 'John James'
                },
                timestamp: 'August 29, 2014',
                content: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
                stars: 22
            }, {
                author: {
                    avatar: 'http://api.randomuser.me/portraits/thumb/women/46.jpg',
                    fullname: 'Mary Jane'
                },
                timestamp: 'August 27, 2014',
                content: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
                stars: 15
            }, {
                 author: {
                    avatar: 'http://api.randomuser.me/portraits/thumb/women/29.jpg',
                    fullname: 'Betty Sue'
                },
                timestamp: 'August 25, 2014',
                content: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
                stars: 12
            }]
        }
    });
};

/* GET thoughts create page */
module.exports.new = function(req, res) {
    res.render('posts/new', { 
        title: 'Thought Wave - Create a New Thought', 
        categories: ['Technology', 'Politics', 'Arts', 'Life', 'World', 'Sports']
    });
};
