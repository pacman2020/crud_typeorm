import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import userRoutes from "./routes";

createConnection().then(async connection => {

    // create express app
    const app = express();
    app.use(express.json());

    //routes
    app.use(userRoutes)

    // start express server
    app.listen( process.env.PORT || 3000);

    console.log("http://localhost:3000/users to see results");

}).catch(error => console.log(error));
