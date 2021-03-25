import "reflect-metadata";
import * as express from "express";
import { createConnection } from 'typeorm';
import * as bodyParser from "body-parser";
import routes from "./routes";

const app = express();
createConnection();

app.use(bodyParser.json());
app.use('/api',routes);

app.listen(3333);