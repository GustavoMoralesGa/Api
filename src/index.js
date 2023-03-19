import express from 'express';
import mainRouter from './router/routes.js';
import cors from 'cors';

const app = express();
app.use(express.json());

app.use(cors())
const whisteList = ["http://localhost:3000"];
app.all(whisteList, (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allowed-Method', 'GET', 'PUT', 'POST', 'DELETE', 'OPTIONS', 'PATCH');
    res.header('Access-Control-Allowed-Headers', 'Content-Type, Authorization, Content-Length, X-Request-With');
    next();
})

app.use(mainRouter);

export default app;
