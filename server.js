const express = require('express');
const cors = require('cors');
const path = require('path');

const { dbConnection } = require('./database/config');

class Server {

    constructor() {
        this.app  = express();
        this.port = process.env.PORT;

        this.conectarDB();

        this.middlewares();

        this.routes();

    }

    async conectarDB() {
        await dbConnection();
    }


    middlewares() {
    console.log(__dirname,"test");

        this.app.use( cors() );

        this.app.use( express.json() );

        // Directorio Público
        // this.app.use( express.static(path.join(__dirname, "../front")) );

    }

    routes(){
        this.app.use( require('./routes/usuarios') );
        this.app.use( require('./routes/publicacion') );
        this.app.use( require('./routes/healthIdear') );
    }
    
    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }

}

module.exports = Server;