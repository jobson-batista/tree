import "reflect-metadata";
import * as express from "express";
import { createConnection } from 'typeorm';
import routes from "./routes";
import * as swaggerUi from 'swagger-ui-express';
import { swaggerDocs }  from './swagger';
import bodyParser = require("body-parser");

const app = express();
createConnection();

app.use(bodyParser.json());
app.use('/api',routes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(3333);