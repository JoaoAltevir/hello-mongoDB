const db = require("../db.js");

const Schema = db.Schema

const petSchema = new Schema({
    nome: {
        type: String,
        require: true
    },
    raca: {
        type: String,
        required: false
    }
})

const Pet = db.model("Pet", petSchema);

Pet.create({
    nome: "tobi",
})

Pet.create({
    nome: "pepsi",
    raca: "VL"
})

module.exports = Pet