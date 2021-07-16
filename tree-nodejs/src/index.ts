import "reflect-metadata";
import * as express from "express";
import { createConnection } from 'typeorm';
import routes from "./routes";
import * as swaggerUi from 'swagger-ui-express';
import { swaggerDocs }  from './swagger';
import bodyParser = require("body-parser");
require('dotenv').config();
import * as cors from 'cors';

const app = express();
const corsOptions = {
    origin: ['http://localhost:8081','https://127.0.0.1:8081'],
    optionsSuccessStatus: 200
}

createConnection();

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use('/api',routes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(process.env.API_PORT || 3333);
