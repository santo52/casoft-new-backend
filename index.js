'use strict'

const mongoose = require('mongoose')
const app = require('./app')

const port = process.env.PORT || 3002

mongoose.Promise = global.Promise;

mongoose.connect(JSON.parse(process.env.DB).name, { useUnifiedTopology: true, useCreateIndex: true, useNewUrlParser: true })
  .then(() => {

    console.log("La conexión a la base de datos casoft se ha realizado correctamente")

    app.listen(port, () => {
      console.log(`servidor corriendo en http://localhost:${port}`);
    });

  })
  .catch(err => console.log(err))