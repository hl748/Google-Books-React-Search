const orm0 = require("../config/orm.js")

const orm = new orm0()

const model = {all:function(cb){orm.selectAll(cb)},
                add:function(burger, cb){orm.insertOne(burger,cb)},
                update:function(burger, cb){orm.updateOne(burger,cb)}
}


module.exports = model;