//llama a mongo
let mongoose = require('mongoose');
//Busca la propiedad esquema
let Schema = mongoose.Schema;

let carroMongo = new Schema({
//clase para mongo de la clase Carro en carClass.js
modelo:String,
motor:String,
marca:String,
agencia:String,
color:String,
asientos:Number,
placa:String,
anio:Number,
precio:String,
imagen:String

});
module.exports = mongoose.model("CARROMONGO",carroMongo);