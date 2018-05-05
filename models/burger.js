var orm = require("../config/orm")
var burger = {
    all: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res)
        })
    },
    insert: function (name, cb) {
        orm.insertOne("burgers", [
            "burgers_name", "devoured"
        ],
            [
                name, false
            ], cb)
    },
    update: function (id,cb){
        var condition = "id = " + id 
        orm.updateOne ("burgers", {
            devoured: true 

        }, condition , cb)
    }
}