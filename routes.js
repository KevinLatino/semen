let controllerCarro = require('./controllerMongo')


module.exports = (app) => {
    app.get('/inicio', (req, res) => {
        res.sendfile('Carros.html');
    });
    app.get('/peticiones', (req, res) => {
        res.sendfile('CarClass.js');
    });
    app.put('/api/carroGuardar', controllerCarro.Guardar);
    app.delete('/api/carroEliminar', controllerCarro.Eliminar);
    app.post('/api/modificar', controllerCarro.modificar);
    app.get("/api/cars/:id", controllerCarro.findById);
    app.get("/api/cars/", controllerCarro.findAll);

}