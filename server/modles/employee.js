const bookshelf = require('../db')

const Employees = bookshelf.model('Employees', {
    tableName: 'Employees',

});

module.exports = Employees;