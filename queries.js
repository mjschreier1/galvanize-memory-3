const database = require("./database-connection");

module.exports = {
    list(){
        return database.select("*").from("games");
    },
    read(id){
        return database.select("*").from("games").where("id", id).first();
    },
    create(game){
        return database("games").insert(game, "*")
            .then(record => record[0]);
    },
    update(id, game){
        return database.select("*").from("games").where("id", id)
            .update(game, "*");
    },
    delete(id){
        return database.select("*").from("games").where("id", id).del();
    }
};
