import express from 'express';

const app = express();
const port = 3001;

app.listen(port, console.log(`Servidor iniciado en puerto ${port}`))