let controllerCarro = require('./controllerMongo')


module.exports = (app)=>{
    app.get('/inicio', (req, res)=> {
        res.sendfile('Carros.html');
    });
    app.get('/peticiones', (req, res)=> {
        res.sendfile('CarClass.js');
    });
    app.put('/api/nuevaoperacion', controllerCarro.Guardar);
}