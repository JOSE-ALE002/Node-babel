"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

// Un modelo es como crear una tabla
// Shema es la forma de definir que queremos guardar dentro de mongoDB
// El model es como colocarle un nombre a nuestro conjunto de propiedades que se quiere guardar
// Basicamnente el schema son como los campos que queremos guardar, y el modelo es el nombre de la tabla
//  Shema son las propiedades
// Model es como el nombre de la tabla
var taskShema = new _mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  done: {
    type: Boolean,
    "default": false
  }
}, {
  // Esto lo que haces es crear automaticamente propiedades de updateAt, y createAt al esquema
  timestamps: true,
  // CADA VES QUE INSERTAMOS UN NUEVO REGISTRO MOONGOOSE AGREGA AUTOMATICAMENTE LA SIGUIENTE PROPIEDAD
  // __v: 0
  // ESTO SE LE CONOCE COMO VERSIONKEYS Y ES PARA EL FUNCIONAMIENTO DE LA BIBLIOTECA
  // PARA QUE NO APAREZCA ESA PROPIEDAD HACEMOS LO SIGUIENTE
  versionKey: false // De esta manera cuando agregemos un nuevo registro no aparecera esa propiedad

}); // De esta forma exportamos algo, ("objetos", "Model")

var _default = (0, _mongoose.model)('Task', taskShema);

exports["default"] = _default;
;