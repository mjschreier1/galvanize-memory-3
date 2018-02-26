const database = require("./database-connection");

module.exports = {
    list(){
        return database.select("*").from("games");
    },
    read(id){
        return database.select("*").from("games").where("id", id).first();
    },
    create(game){
        return database("games").create(game, "*");
    },
    update(id, game){
        return database.select("*").from("games").where("id", id)
            .update("game", game, "*");
    },
    delete(id){
        return database.select("*").from("games").where("id", id).del();
    }
};
