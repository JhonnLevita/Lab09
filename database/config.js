const mongoose = require('mongoose');


const dbconection = async() => {
    try {
        await mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('Conexión con la Base de Datos realizada con exito');

    } catch (error) {
        console.log(error);
        throw new Error('Error en la conexión a la base de Datos');
    }
}

module.exports = {
    dbconection
}