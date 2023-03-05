import dotenv from 'dotenv';
dotenv.config();

import app from './src/index.js';

const port = 3001;
app.listen(port, console.log(`Servidor iniciado en puerto ${port}`))