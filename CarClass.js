class Carro{
    constructor(modelo, motor, marca, agencia, color, asientos, placa, anio, precio, imagen)

{
    this.modelo = modelo;
    this.motor = motor;
    this.marca = marca;
    this.agencia = agencia;
    this.color = color;
    this.asientos = asientos;
    this.placa = placa;
    this.anio = anio;
    this.precio = precio;
    this.imagen = imagen;
}

Guardar(){
    let objectSend = this;

    return new Promise((resolve, reject) => {
       
       try {
           let xhr = new XMLHttpRequest();
           xhr.open('PUT','/api/carroGuardar')
           xhr.setRequestHeader('Content-Type','application/json');
               xhr.onload = function() {
                   if (xhr.status == 200) {
                       resolve(JSON.parse(xhr.responseText));
                   }else{
                       reject(xhr);
                   }         
               }
               xhr.send(JSON.stringify(objectSend));
       } catch (error) {
           reject(error.message);
       }
   });
}

Eliminar(){
    var objetoAEnviar = this;
    return new Promise(function(resolve,reject) 
    {
    
        try{
                var xhr = new XMLHttpRequest();
            xhr.open("DELETE", "/api/carroEliminar");
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.onload = function(){
                if(xhr.status == 200)
                {
                    resolve(JSON.parse(xhr.responseText));
                }
                else
                {
                    reject(xhr)
                }
            };
xhr.send(JSON.stringify(objetoAEnviar));
    }
            catch(error)
            {
                reject(error.message);
            }
            });

 }
}