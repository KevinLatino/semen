let Item = require("./carroMongo"); //Requiere la clase
exports.Guardar = (req,res)=>{ //Exporta la siguiente funcion 
    //Crea y guarda una funcion
    Item.create({
        //Crea el Schema
    modelo: req.body.modelo,
    motor: req.body.motor,
    marca: req.body.genero,
    agencia: req.body.agencia,
    color: req.body.color,
    asientos: req.body.asientos,
    placa: req.body.placa,
    anio: req.body.anio,
    precio: req.body.precio,
    imagen: req.body.imagen
    },function(err,item){ //Creamos un metodo
        if(err){
            res.send(err) //Deteccion de errores
        }
        else{
            Item.find(function(err,item){ //Metodo find encuentra todo Schema creado 
                if(err){
                    res.send(err) //Deteccion de errores
                }else{
                    res.json(item); //Crea los JSON
                }
            })
        }
    })
}