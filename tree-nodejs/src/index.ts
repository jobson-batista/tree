import "reflect-metadata";
import * as express from "express";
import { createConnection } from 'typeorm';
import * as bodyParser from "body-parser";
import routes from "./routes";
require('dotenv').config();

const app = express();
createConnection();

app.use('/api',routes);

app.listen(process.env.API_PORT || 3030);
