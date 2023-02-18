import express from 'express';

const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('Hola mundo')
})

app.listen(port, console.log(`Servidor iniciado en puerto ${port}`))