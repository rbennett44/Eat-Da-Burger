var orm = require('../config/orm.js');

var burger = {
    all: function(cb) {
        orm.all('food',function(res){
            cb(res);
        })
    },

    update: function(id,cb) {
        orm.update('food',id,cb);
    },

    create: function(name,cb) {
        orm.create('burgers', name, cb);
    }
}

module.exports = burger;