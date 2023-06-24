const knex = require('knex')({
    client: "mysql",
    connection: {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'sample',
        charset: 'utf8'
    }
});

const bookshelf = require('bookshelf')(knex)

//Bookshelf supported plugins


module.exports = bookshelf;